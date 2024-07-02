import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Button, Heading, Text, useColorModeValue, Link } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import authScreenAtom from "../atoms/authAtom";
import useShowToast from "../hooks/useShowToast";
import { useState } from "react";
import userAtom from "../atoms/userAtom";

export default function LoginCard() {
    const setAuthScreen = useSetRecoilState(authScreenAtom); //just like a state setter function
    const [inputs, setInputs]=useState({username: '', password: ''})
    const [remember, setRemember]=useState(false)
    
    const showToast=useShowToast()

    const setUser=useSetRecoilState(userAtom)

    const handleLogin=async ()=>{
        try{
            const res=await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
            })

            const data=await res.json()

            if(data.error){
                showToast('Error', data.error, 'error')
                return
            }

            if(remember)
                localStorage.setItem('user-threads', JSON.stringify(data))

            setUser(data)

        }
        catch(err){
            showToast('Error', err, 'error')
        }
    }

    return (
        <Flex align={"center"} justify={"center"}>
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>Login</Heading>
                </Stack>
                <Box rounded={"lg"} bg={useColorModeValue("white", "gray.dark")} boxShadow={"lg"} p={8} w={{ base: "full", sm: "400px" }}>
                    <Stack spacing={4}>
                        <FormControl id="userName">
                            <FormLabel>Username</FormLabel>
                            <Input type="text" value={inputs.username} onChange={(e)=>setInputs({...inputs, username: e.target.value})} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" value={inputs.password} onChange={(e)=>setInputs({...inputs, password: e.target.value})} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack direction={{ base: "column", sm: "row" }} align={"start"} justify={"space-between"}>
                                <Checkbox onChange={(e)=>setRemember(e.target.checked)}>Remember me</Checkbox>
                                <Text color={"blue.400"}>Forgot password?</Text>
                            </Stack>
                            <Button
                                bg={useColorModeValue("gray.600", "gray.700")}
                                color={"white"}
                                _hover={{
                                    bg: useColorModeValue("gray.700", "gray.600"),
                                }}
                                onClick={handleLogin}
                            >
                                Sign in
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={"center"}>
                                Don't have an account?{" "}
                                <Link color={"blue.400"} onClick={() => setAuthScreen("signup")}>
                                    Sign up
                                </Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
