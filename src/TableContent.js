import React from 'react'
import { Tr, Td } from '@chakra-ui/react'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const TableContent = ({ name, email, telefone, data }) => {

  // const stringDate = toString(data);
  // const formattedDate = format(data, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
  //   locale: ptBR,
  // });
  // console.log(stringDate);

  return (
    <Tr _hover={{ backgroundColor:"#2F5D62" }}>
      <Td 
      color="#A7C4BC" 
      fontSize="1rem" 
      textAlign="center" 
      p=".25rem"
      > 
      data
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