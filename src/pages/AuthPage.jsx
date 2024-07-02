import React from 'react'
import SignUpCard from '../components/SignUpCard'
import LoginCard from '../components/LoginCard'
import { useRecoilValue } from 'recoil'
import authScreenAtom from '../atoms/authAtom'

function AuthPage() {
  const authScreenState=useRecoilValue(authScreenAtom)  //same as use state

  return (
    <>
      {authScreenState==='login' ? <LoginCard /> : <SignUpCard />}
    </>
  )
}

export default AuthPage