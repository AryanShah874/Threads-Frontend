import { Avatar, Box, Flex, Link, Menu, MenuButton, MenuItem, MenuList, Portal, Text, VStack, useToast } from '@chakra-ui/react'
import React from 'react'
import { BsInstagram } from "react-icons/bs"
import { CgMoreO } from "react-icons/cg";


function UserHeader() {
  const toast=useToast();

  const copyURL=()=>{
    const currentURL=window.location.href;
    navigator.clipboard.writeText(currentURL).then(()=>{
      toast({
        description: 'URL copied.',
        duration: 2000,
      })
    });
  }

  return (
    <VStack gap={4} alignItems={'start'}>
      <Flex justifyContent={'space-between'} w={'full'}>
        <Box>
          <Text fontSize={'2xl'} fontWeight={'bold'}>Mark Zuckerberg</Text>
          <Flex gap={2} alignItems={'center'}>
            <Text fontSize={'sm'}>markzuckerberg</Text>
            <Text fontSize={'xs'} bg={'gray.dark'} color={'gray.light'} padding={1} borderRadius={'full'}>threads.net</Text>
          </Flex>
        </Box>
        <Box>
          <Avatar name='Mark Zuckerberg' src='/zuck-avatar.png' size={{
            base: 'md',
            md: 'xl'
          }} />
        </Box>
      </Flex>

      <Text>Co-founder, executive chairman and CEO of Meta Platforms.</Text>

      <Flex justifyContent={'space-between'} w={'full'}>

        <Flex gap={2} alignItems={'center'}>
          <Text color={'gray.light'}>3.2K followers</Text>
          <Box h={1} w={1} bg={'gray.light'} borderRadius={'full'}></Box>
          <Link color={'gray.light'} cursor={'pointer'}>instagram.com</Link>
        </Flex>

        <Flex>
          <Box className='icon-container'>
            <BsInstagram size={24} cursor='pointer' />
          </Box>
          <Box className='icon-container'>
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={'pointer'} />
              </MenuButton>
              <Portal>
                <MenuList bg={'gray.dark'}>
                  <MenuItem bg={'gray.dark'} onClick={copyURL} transition={'color .2s ease-in-out'} _hover={{color: '#656661'}}>Share link</MenuItem>
                  <MenuItem bg={'gray.dark'} transition={'color .3s ease-in-out'} _hover={{color: '#656661'}}>Report</MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>

      </Flex>

      <Flex w={'full'}>
        <Flex flex={1} borderBottom={'1.5px solid white'} justifyContent={'center'} pb={3} cursor={'pointer'} >
          <Text fontWeight={'bold'}>Threads</Text>
        </Flex> 
        <Flex flex={1} borderBottom={'1.5px solid gray'} color={'gray.light'} justifyContent={'center'} pb={3} cursor={'pointer'} >
          <Text fontWeight={'bold'}>Replies</Text>
        </Flex> 

      </Flex>
    </VStack>
  )
}

export default UserHeader 