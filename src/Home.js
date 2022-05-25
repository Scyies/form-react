import { Box, Text } from "@chakra-ui/core"

export default function Home() {
  return (
    <nav>
      <Box 
        border="1px"
        rounded="10px"
        borderColor="gray.300"
        boxShadow="md"
        color="black"
        bg="lavender" 
        w="400px" 
        h="400px"
        fontSize="2rem"
        textAlign="center"
        fontFamily="Consolas" 
      >
        <a href="/">React Form Home</a>
        <ul>
          <Text
            textDecoration="none"
          >
            <a href="/form">Form</a>
          </Text>
        </ul>
      </Box>
      
    </nav>
  )
}
