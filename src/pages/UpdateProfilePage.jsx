import React, { useRef, useState } from "react";
import { Button, Flex, FormControl, FormLabel, Heading, Input, Stack, useColorModeValue, Avatar, Center } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import usePreviewImg from "../hooks/usePreviewImg";

function UpdateProfilePage() {

    const [user, setUser]=useRecoilState(userAtom)
  
    const [inputs, setInputs]=useState({fullName: user.name, usernane: user.username, email: user.email, bio: user.bio, password: ''})

    const fileRef=useRef(null)

    const {handleImageChange, imgURL}=usePreviewImg()

    return (
        <Flex align={"center"} justify={"center"} my={6}>
            <Stack spacing={4} w={"full"} maxW={"md"} bg={useColorModeValue("white", "gray.dark")} rounded={"xl"} boxShadow={"lg"} p={6}>
                <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                    User Profile Edit
                </Heading>
                <FormControl>
                    <Stack direction={["column", "row"]} spacing={6}>
                        <Center>
                            <Avatar size="xl" src={imgURL || user.profilePic} />
                        </Center>
                        <Center w="full">
                            <Button w="full" onClick={()=>fileRef.current.click()}>Change Avatar</Button>
                            <Input type="file" hidden ref={fileRef} onChange={handleImageChange} />  {/* useRef to open file when button is clicked */}
                        </Center>
                    </Stack>
                </FormControl>
                <FormControl id="name" isRequired>
                    <FormLabel>Full name</FormLabel>
                    <Input placeholder="Jimmy Fallon" _placeholder={{ color: "gray.500" }} type="text" value={inputs.fullName} onChange={(e)=>setInputs({...inputs, fullName: e.target.value})} />
                </FormControl>
                <FormControl id="userName" isRequired>
                    <FormLabel>User name</FormLabel>
                    <Input placeholder="jimmyfallon05" _placeholder={{ color: "gray.500" }} type="text" value={inputs.usernane} onChange={(e)=>setInputs({...inputs, usernane: e.target.value})} />
                </FormControl>
                <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input placeholder="your-email@example.com" _placeholder={{ color: "gray.500" }} type="email" value={inputs.email} onChange={(e)=>setInputs({...inputs, email: e.target.value})} />
                </FormControl>
                <FormControl>
                    <FormLabel>Bio</FormLabel>
                    <Input placeholder="..." _placeholder={{ color: "gray.500" }} type="text" value={inputs.bio} onChange={(e)=>setInputs({...inputs, bio: e.target.value})}/>
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder="password" _placeholder={{ color: "gray.500" }} type="password" value={inputs.password} onChange={(e)=>setInputs({...inputs, password: e.target.value})} />
                </FormControl>
                <Stack spacing={6} direction={["column", "row"]}>
                    <Button
                        bg={"red.400"}
                        color={"white"}
                        w="full"
                        _hover={{
                            bg: "red.500",
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        bg={"green.500"}
                        color={"white"}
                        w="full"
                        _hover={{
                            bg: "green.600",
                        }}
                    >
                        Submit
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
}

export default UpdateProfilePage;
