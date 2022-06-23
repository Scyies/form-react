import React from 'react'
import { Tr, Td } from '@chakra-ui/react'

const TableContent = ({ name, email, telefone, data }) => {
  const dataString = data.toString();

  return (
    <Tr _hover={{ backgroundColor:"#2F5D62" }}>
      <Td 
      color="#A7C4BC" 
      fontSize="1rem" 
      textAlign="center" 
      p=".25rem"
      > 
      {dataString}
      </Td>
      <Td 
      color="#A7C4BC" 
      fontSize="1rem" 
      textAlign="center" 
      p=".25rem"> 
      {name}
      </Td>
      <Td 
      color="#A7C4BC" 
      fontSize="1rem" 
      textAlign="center" 
      p=".25rem"> 
      {telefone}
      </Td>
      <Td 
      color="#A7C4BC" 
      fontSize="1rem" 
      textAlign="center" 
      p=".25rem"> 
      {email}
      </Td>
    </Tr>
  )
}

export default TableContent