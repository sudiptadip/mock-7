import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AdminNav() {
  const dispatch = useNavigate()
  const data = useSelector((e) => e.Auth_Reducer)
  return (
    <Box
    width={"100%"}
    h={"80px"}
    display={"flex"}
    justifyContent={"space-evenly"}
    alignItems={"center"}
    bg={"blue.300"}
  >
    {data.token ? null : <Button onClick={()=>dispatch('/login')} >Login</Button>}
    <Button onClick={()=>dispatch('/data')}>Data</Button>
    <Button onClick={()=>dispatch('/report')}>Report</Button>
  </Box>
  )
}
