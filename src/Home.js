import { Text, Flex } from "@chakra-ui/core"
import React from "react";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Flex 
        bg="#2F5D62"
        w="100%"
        h="100%"
        fontSize="2rem"
        fontFamily="Consolas"
        justifyContent="center"
      >
        <Text color="#A7C4BC" p="1rem">
          <Link to="#"
          _hover={{ color: "#DFEEEA" }}>
            React Form
          </Link>
        </Text>
      </Flex>
      <Flex
        backgroundColor="#5E8B7E"
        flexDirection="column"
        textAlign="center"
        fontFamily="Consolas"
        fontSize="1.5rem"
        w="100%"
        h="110%"
      >
        <Text
          textDecoration="none"
          color="#A7C4BC"
          p="1rem"
          borderBottom="3px solid #DFEEEA"
          _hover={{ fontSize: "2.rem" }}
        >
          <Link to="/form1/"
          
          p=".25rem">
            Form salvo em local storage
          </Link>
        </Text>
        <Text
          textDecor="none"
          color="#A7C4BC"
          p="1rem"
          borderBottom="3px solid #DFEEEA"
          marginBottom="1rem"
          _hover={{ fontSize: "2.rem" }}
        >
          <Link to="/form2/"
          p=".25rem"
          >
          Form feito com state
        </Link>
        </Text>
      </Flex>   
    </>
  )
}
