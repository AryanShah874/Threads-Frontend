import { Flex, Box, FormControl, FormLabel, Input, InputGroup, HStack, InputRightElement, Stack, Button, Heading, Text, useColorModeValue, Link, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useSetRecoilState } from "recoil";
import authScreenAtom from "../atoms/authAtom";
import userAtom from "../atoms/userAtom";
import useShowToast from "../hooks/useShowToast";

export default function SignUpCard() {
    const [showPassword, setShowPassword] = useState(false);

    const setAuthScreen=useSetRecoilState(authScreenAtom)  //it's like context api
    const setUser=useSetRecoilState(userAtom)

    const [inputs, setInputs]=useState({name: '', username: '', email: '', password: ''})

    const showToast=useShowToast()

    const handleSignup=async()=>{
      try{
        const res=await fetch('/api/users/signup', {//why not whole url, see vite.config
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
                    <Heading fontSize={"4xl"} textAlign={"center"}>
                        Sign up
                    </Heading>
                </Stack>
                <Box rounded={"lg"} bg={useColorModeValue("white", "gray.dark")} boxShadow={"lg"} p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="name" isRequired>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input type="text" value={inputs.name} onChange={(e)=>setInputs({...inputs, name: e.target.value})} />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="userName" isRequired>
                                    <FormLabel>Username</FormLabel>
                                    <Input type="text" value={inputs.username} onChange={(e)=>setInputs({...inputs, username: e.target.value})}/>
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" value={inputs.email} onChange={(e)=>setInputs({...inputs, email: e.target.value})}/>
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? "text" : "password"} value={inputs.password} onChange={(e)=>setInputs({...inputs, password: e.target.value})} />
                                <InputRightElement h={"full"}>
                                    <Button variant={"ghost"} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={useColorModeValue('gray.600', 'gray.700')}
                                color={"white"}
                                _hover={{
                                    bg: useColorModeValue('gray.700', 'gray.600'),
                                }}
                                onClick={handleSignup}   
                            >
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={"center"}>
                                Already a user? <Link color={"blue.400"} onClick={()=>setAuthScreen('login')}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
