import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomepageButton() {
  const navigete = useNavigate()
  function Handeluser(){
    navigete('/user')
  }
  function Handeladmin(){
    navigete('/data')
  }
  return (
    <Box
      width={"100%"}
      h={"80px"}
      display={"flex"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      bg={"blue.300"}
    >
      <Button onClick={Handeladmin} >Admin</Button>
      <Button onClick={Handeluser} >User</Button>
    </Box>
  );
}
