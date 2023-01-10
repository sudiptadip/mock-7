import {
  Box,
  Button,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

export default function UserForm() {

  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  const [place,setPlace] = useState('')
  const [gender,setGender] = useState('')
  const [loading,setLoading] = useState(false)

function AddData(){
  if(name === '' || age === '' || place === '' || gender === ''){
    alert('fill the form')
  }else{
  setLoading(true)
  axios.post('https://first-api-mock.onrender.com/dogs', 
  {name,age,place,gender})
  .then(function (response) {
    console.log(response);
    setLoading(false)
    alert("successfully registered")
    setName('')
    setAge('')
    setPlace('')
    setGender('')
    setLoading('')
  })
  .catch(function (error) {
    console.log(error);
    alert('not added data')
    setLoading(false)
  });
}
}

if(loading){
  return <Box>Loading....</Box>
}else{
  return (
    <Box w={"100%"}>
      <Box
        w={"390px"}
        h={"500px"}
        border={"1px solid black"}
        margin={"auto"}
        mt={'80px'}
        boxShadow='2xl'
      >
        <FormLabel ml={"11%"} mt={'80px'} >Name of breed</FormLabel>
        <Input w={"80%"} type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" />

        <FormLabel ml={"11%"} mt={'10px'} >Age of pet</FormLabel>
        <Input value={age} onChange={(e)=>setAge(e.target.value)} w={"80%"} type="number"  placeholder="Age" />

        <FormLabel ml={"11%"} mt={'10px'} >Gender</FormLabel>
        <Select  onChange={(e)=>setGender(e.target.value)} w={"80%"} ml={'11%'} >
        <option value="">Gender</option>
          <option value="Mail">Mail</option>
          <option value="Femail">Femail</option>
        </Select>

        <FormLabel ml={"11%"} mt={'10px'} >Place</FormLabel>
        <Input value={place} onChange={(e)=>setPlace(e.target.value)} w={"80%"} type="text" placeholder="Place" />
        
        <Button onClick={AddData} w={'80%'} ml={'1%'} mt={'20px'} colorScheme={'blue'} >Submit</Button>
      </Box>
    </Box>
  );
}
}
