import { Text, Flex } from "@chakra-ui/react"
import React from "react";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Flex 
        bg="#2F5D62"
        w="100%"
        h="10vh"
        fontSize="2rem"
        fontFamily="Consolas"
        justifyContent="center"
      >
        <Text color="#A7C4BC" p="1rem"
        _hover={{ color: "#DFEEEA" }}
        textAlign="center"
        lineHeight="normal"
        verticalAlign="middle">
            React Form
        </Text>
      </Flex>
      <Flex
        backgroundColor="#5E8B7E"
        flexDirection="column"
        textAlign="center"
        fontFamily="Consolas"
        fontSize="1.5rem"
        w="100%"
        h="90vh"
      >
        <Text
          textDecoration="none"
          color="#A7C4BC"
          p="1rem"
          borderBottom="3px solid #DFEEEA"
          _hover={{ fontSize: "2.rem" }}
        >
          <Link to="/form-react/form1/"
          
          p=".25rem">
            Form
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
          <Link to="/form-react/history/"
          p=".25rem"
          >
          Histórico de Formulários
        </Link>
        </Text>
      </Flex>   
    </>
  )
}
