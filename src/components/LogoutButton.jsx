import { Button, useToast } from '@chakra-ui/react'
import React from 'react'
import { useSetRecoilState } from 'recoil'
import userAtom from '../atoms/userAtom'
import useShowToast from '../hooks/useShowToast'
import { HiOutlineLogout } from "react-icons/hi";

function LogoutButton() {

  const setUser=useSetRecoilState(userAtom)

  const showToast=useShowToast()

  const handleClick=async ()=>{
    try{
      const res=await fetch('/api/users/logout', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data=await res.json()

      if(data.error){
        showToast('Error', data.error, 'Error')
        return
      }

      localStorage.removeItem('user-threads')
      setUser(null)
    }
    catch(err){
      showToast('Error', err, 'Error')
    }
  }

  return (
    <Button position={'fixed'} top={'30px'} right={'30px'} size={'sm'} onClick={handleClick}><HiOutlineLogout size={25} /></Button>
  )
}

export default LogoutButton