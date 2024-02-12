import React from 'react'
import Heading from './Heading'
import Subheading from './Subheading'
import InputBox from './InputBox'
import Button from './Button'
import BottomWarning from './BottomWarning'

export default function Signin() {
  return (
    <>
      <Heading label={"Sign In"}></Heading>
      <Subheading label={"Enter you credentials to access your account"}></Subheading>
      <InputBox label={"Email"} placeholder={"johndoe@gmail.com"}></InputBox>
      <InputBox label={"Password"} placeholder={""}></InputBox>
      <div>
        <Button label={"Sign In"}></Button>
      </div>
      <BottomWarning label={"Dont have an account?"} to={"/signup"} buttonText={"sign Up"}></BottomWarning>
    </>
  )
}
