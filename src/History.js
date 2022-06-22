import React, { useEffect, useState } from 'react'
import { Box, Text} from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, TableCaption } from '@chakra-ui/react'
import TableContent from './TableContent.js'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js"
import { 
  getFirestore, collection, getDocs,
  addDoc, Timestamp, setDoc, doc
} from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDgTuevYS1Zl8FYcSfhjc0staWOvLf8pWs",
  authDomain: "react-form-ea35a.firebaseapp.com",
  databaseURL: "https://react-form-ea35a-default-rtdb.firebaseio.com",
  projectId: "react-form-ea35a",
  storageBucket: "react-form-ea35a.appspot.com",
  messagingSenderId: "1011728446502",
  appId: "1:1011728446502:web:255a2623e5ff8fb85be2e7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'history');

export default function History() {

  const [inputList, setInputList] = useState([]);

  const getInfo = async () => {
    try {
      const information = [];

      await getDocs(colRef).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          information.push({... doc.data(), id: doc.id})
        });
        setInputList([... information]);
      })
    } 
    catch (e) {
      alert('Error: ' + e.message);
    }
  }

  console.log(inputList);

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <Box
      h="100vh"
      backgroundColor="#2F5D62">
        <Text color="#A7C4BC" 
        p="1rem"
        _hover={{ color: "#DFEEEA" }}
        fontSize="2rem"
        textAlign="center">
          Histórico
        </Text>
        <TableContainer
        h="100%"
        backgroundColor="#5E8B7E"
        paddingTop="1rem">
          <Table variant='simple'>
            <TableCaption>Histórico de formulários enviados</TableCaption>
              <Thead>
                <Tr>
                  <Th>Data</Th>
                  <Th>Nome</Th>
                  <Th>Email</Th>
                  <Th>Telefone</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  inputList.map((info, index) => {
                    return(
                    <TableContent 
                    key={index} 
                    name={info.name}
                    email={info.email}
                    telefone={info.tel}
                    data={info.date}
                    />
                    )
                  })
                }
              </Tbody>
          </Table>
        </TableContainer>
    </Box>
  )
}
