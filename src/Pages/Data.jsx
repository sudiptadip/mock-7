import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNav from "../Components/AdminNav";
import { GetData } from "../Redux/AppReducer/Action";

export default function Data() {
  const dispatch = useDispatch();
  const data = useSelector((e) => e.AppReducer);
  console.log(data);

  useEffect(() => {
    dispatch(GetData());
  }, []);

  function edit() {
    
  }
  function delite(e) {
    axios
      .delete("https://first-api-mock.onrender.com/dogs/" + e.id)
      .then(() => {
        alert("delite success");
        window.location.reload();
      });
  }

  return (
    <Box>
      <AdminNav />
      <Box mt={"25px"} display={"flex"} w={"100%"}>
        <Box w={"15%"} border={"1px solid black"} h={"100vh"}></Box>
        <Grid
          display={"grid"}
          templateColumns="repeat(4, 1fr)"
          gap={10}
          ml={"5%"}
          w={"80%"}
          border={"1px solid black"}
        >
          {data.data.map((e) => (
            <Box height={"320px"} border={"1px solid black"}>
              <Image src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg" />
              <Text mt={"10px"} fontWeight={500} fontSize={"20px"}>
                {" "}
                Name :- {e.name}
              </Text>
              <Text fontWeight={500} fontSize={"18px"}>
                {" "}
                age :- {e.age}
              </Text>
              <Text fontWeight={500} fontSize={"18px"}>
                {" "}
                age :- {e.gender}
              </Text>
              <Box
                mt={"20px"}
                display={"flex"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
              >
                <Button colorScheme={"orange"} onClick={() => edit(e)}>
                  Edit
                </Button>
                <Button colorScheme={"red"} onClick={() => delite(e)}>
                  Delite
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
