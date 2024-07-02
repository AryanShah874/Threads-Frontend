import { Avatar, Box, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Portal, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import PostFooter from "./PostFooter";

function UserPost({ likes, replies, postImg, postTitle }) {
    const [liked, setLiked] = useState(false);
    const navigate=useNavigate();

    return (
        <Box cursor={'pointer'} onClick={()=>navigate("/markzuckerberg/post/1")}>
            <Flex gap={3} mb={4} py={5}>
                <Flex flexDirection={"column"} alignItems={"center"}>
                    <Avatar size={"md"} name="Mark Zuckerberg" src="/zuck-avatar.png" />
                    <Box w={1} h={"full"} bg={"gray.light"} my={2}></Box>
                    <Box position={"relative"} w={"full"}>
                        <Avatar size={"xs"} name="John Doe" src="https://bit.ly/dan-abramov" position={"absolute"} top={0} left={"15px"} padding={"2px"} />
                        <Avatar size={"xs"} name="Christian Nwamba" src="https://bit.ly/code-beast" position={"absolute"} bottom={0} right={"-5px"} padding={"2px"} />
                        <Avatar size={"xs"} name="Segun Adebayo" src="https://bit.ly/sage-adebayo" position={"absolute"} bottom={0} left={"4px"} padding={"2px"} />
                    </Box>
                </Flex>

                <Flex flex={1} flexDirection={"column"} gap={2}>
                    <Flex justifyContent={"space-between"} w={"full<"}>
                        <Flex w={"full"} alignItems={"center"}>
                            <Text fontSize={"sm"} fontWeight={"bold"}>
                                markzuckerberg
                            </Text>
                            <Image src="/verified.png" w={4} h={4} ml={4} />
                        </Flex>

                        <Flex gap={4} alignItems={"center"}>
                            <Text fontSize={"sm"} color={"gray.light"}>
                                1d
                            </Text>
                            <Box className="icon-container" onClick={(e)=>e.stopPropagation()}>
                                <Menu>
                                    <MenuButton><BsThreeDots size={24} cursor={'pointer'} /></MenuButton>
                                    <Portal>
                                        <MenuList bg={'gray.dark'}>
                                            <MenuItem bg={'gray.dark'} transition={'color .2s ease-in-out'} _hover={{color: '#656661'}}>bookmark</MenuItem>
                                            <MenuItem bg={'gray.dark'} transition={'color .2s ease-in-out'} _hover={{color: '#656661'}}>Report</MenuItem>
                                        </MenuList>
                                    </Portal>
                                </Menu>
                            </Box>
                            
                        </Flex>
                    </Flex>

                    <Text fontSize={"sm"}>{postTitle}</Text>
                    {postImg && (
                        <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
                            <Image src={postImg} w={"full"} />
                        </Box>
                    )}

                    <Flex gap={3} my={1} onClick={(e)=>e.stopPropagation()}>
                        <PostFooter liked={liked} setLiked={setLiked} />
                    </Flex>

                    <Flex gap={2} alignItems={"center"}>
                        <Text fontSize={"sm"} color={"gray.light"}>
                            {replies} replies
                        </Text>
                        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
                        <Text color={"gray.light"} fontSize={"sm"}>
                            {likes} likes
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
}

export default UserPost;
