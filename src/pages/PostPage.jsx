import React from "react";
import { Avatar, Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import PostFooter from "../components/PostFooter";
import { useState } from "react";
import Comment from "../components/Comment";

function PostPage() {

    const [liked, setLiked]=useState(false)

    return (
        <>
            <Flex>
                <Flex gap={3} w={"full"} alignItems={"center"}>
                    <Avatar src="/zuck-avatar.png" size={"md"} name="Mark Zuckerberg" />
                    <Flex alignItems={"center"}>
                        <Text fontSize={"sm"} fontWeight={"bold"}>
                            markzuckerberg
                        </Text>
                        <Image src="/verified.png" w={4} h={4} ml={1} />
                    </Flex>
                </Flex>

                <Flex gap={4} alignItems={"center"}>
                    <Text fontSize={"sm"} color={"gray.light"}>
                        1d
                    </Text>
                    <BsThreeDots />
                </Flex>
            </Flex>

            <Text my={3}>Let's talk about threads.</Text>

            <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
                <Image src={'/post1.png'} w={"full"} />
            </Box>

            <Flex gap={3} my={3}>
              <PostFooter liked={liked} setLiked={setLiked} />
            </Flex>

            <Flex gap={2} alignItems={'center'}>
              <Text color={'gray.light'} fontSize={'sm'}>232 replies</Text>
              <Box w={.5} h={.5} borderRadius={'full'} bg={'gray.light'}></Box>
              <Text color={'gray.light'} fontSize={'sm'}>{liked ? 2321+1 : 2321} likes</Text>
            </Flex>
            
            <Divider my={4} />

            <Flex justifyContent={'space-between'}>
              <Flex gap={2} alignItems={'center'}>
                <Text fontSize={'2xl'}>👋</Text>
                <Text color={'gray.light'}>Get the app to like, reply and post.</Text>
              </Flex>
              <Button>Get</Button>
            </Flex>

            <Divider my={4}/>

            <Comment comment="Looks really good!" createdAt="2d" likes={100} username="johndoe" userAvatar="https://bit.ly/dan-abramov" />
            <Comment comment="Looks really good!" createdAt="2d" likes={240} username="kentdodds" userAvatar="https://bit.ly/kent-c-dodds" />
            <Comment comment="Looks really good!" createdAt="2d" likes={111} username="ryanflorence" userAvatar="https://bit.ly/ryan-florence" />
        </>
    );
}

export default PostPage;
