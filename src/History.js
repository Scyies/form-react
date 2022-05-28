import React, { useState, useEffect } from 'react'
import { Stack, Button, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Box, Text} from '@chakra-ui/core'

export default function History() {
  
  const items = { ...localStorage };

  let str = '';
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      str = str + `${i}: ${items[i]}\n`
    }
  }
  let strSplit = str.split('\n')

  let arrayLength = strSplit.length
  let arr = [];

  for ( let i = 0; i < arrayLength; i++) {
    arr.push(strSplit[i]);
  }

  let rederedOutput = arr.map(item => <Text color="#A7C4BC" fontSize="1rem" textAlign="center"> {item} </Text>)

  return (
    <Box
      h="100vh"
      backgroundColor="#2F5D62">
        <Text color="#A7C4BC" 
        p="1rem"
        _hover={{ color: "#DFEEEA" }}
        fontSize="2rem"
        textAlign="center">
          History
        </Text>
        <Box>
          {rederedOutput}
        </Box>
    </Box>
  )
}
