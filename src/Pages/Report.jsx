import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNav from "../Components/AdminNav";
import { GetData } from "../Redux/AppReducer/Action";

export default function Report() {
const data = useSelector((e) => e.AppReducer)
const dispatch = useDispatch();
const [femail,setFemail] = useState(0)
const [totalage,setTotalage] = useState(0)

useEffect(() => {
  dispatch(GetData());
}, []);

useEffect(()=>{
  data.data.map((e)=> {
    if(e.gender === "Male"){
      setFemail((k) => k + 1)
    }
    setTotalage((x) => x + Number(e.age))
  })
},[data])

console.log(femail)

console.log(data.data.length)
console.log(totalage)
  return (
    <Box>
      <AdminNav />
      <Text fontSize={"25px"} fontWeight={500} mt={"30px"}>
        overall report of event
      </Text>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>overall report of event</TableCaption>
          <Thead>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontWeight={600} >Total number of dogs attending</Td>
              <Td>{data.data.length}</Td>
            </Tr>
            <Tr>
              <Td fontWeight={600} >Number of female dogs attending.</Td>
              <Td>{Number(data.data.length) - femail}</Td>
            </Tr>
            <Tr>
              <Td fontWeight={600} >Number of Male dogs attending</Td>
              <Td>{femail}</Td>
            </Tr>
            <Tr>
              <Td fontWeight={600} >Average age group of dogs attending</Td>
              <Td>{Math.floor(totalage/Number(data.data.length))}</Td>
            </Tr>
          </Tbody>
          
        </Table>
      </TableContainer>
    </Box>
  );
}
