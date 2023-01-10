import { Box, Button, FormLabel, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminNav from "../Components/AdminNav";
import { logindata } from "../Redux/Authreducer/Action";
// https://reqres.in/api/login
export default function Login() {
    const [email,setEmail] = useState('eve.holt@reqres.in')
    const [password,setPassword] = useState('cityslicka')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const data = useSelector((e) => e.Auth_Reducer)
    
    useEffect(()=>{
        if(data.token){
            navigate('/')
        }
    },[data])

    function loginReq(){
        console.log(email,password)
        dispatch(logindata({email,password})) 
    }
if(data.isLooding){
    return <Box>
        <AdminNav />
        <Text>Loading...</Text>
    </Box>
}else{
  return (
    <Box w={"100%"}>
      <AdminNav />
        <Text mt={'30px'} textAlign={'center'} fontSize={'26px'} >Login</Text>
      <Box
        w={"390px"}
        h={"450px"}
        border={"1px solid black"}
        margin={"auto"}
        mt={"50px"}
        boxShadow="2xl"
      >
        <FormLabel ml={"11%"} mt={"80px"}>
          Email
        </FormLabel>
        <Input
          w={"80%"}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />

        <FormLabel ml={"11%"} mt={"10px"}>
          Password
        </FormLabel>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          w={"80%"}
          type="password"
          placeholder="Password"
        />

        <Button
          onClick={loginReq}
          w={"80%"}
          ml={"1%"}
          mt={"20px"}
          colorScheme={"blue"}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
}
