import { Box, Text, Flex, Link } from "@chakra-ui/core"

export default function Home() {
  return (
      <Flex 
        bg="#464646"
        w="100%"
        h="100%"
        fontSize="2rem"
        textAlign="center"
        fontFamily="Consolas"
        justifyContent="space-around"
      >
        <Text color="white">
          <Link href="/"
          _hover={{ color: "black" }}>
            React Form
          </Link>
        </Text>
        <Text
          textDecoration="none"
          color="white"
        >
          <Link href="/form"
          _hover={{ color: "black" }}>
            Form
          </Link>
        </Text>
      </Flex>
  )
}
