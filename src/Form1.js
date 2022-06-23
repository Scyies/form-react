import React, { useState } from 'react'
import { Stack, Button, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Box} from '@chakra-ui/react'
import { initializeApp } from "firebase/app"
import { 
  getFirestore, collection,
  addDoc, Timestamp
} from "firebase/firestore";

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

export default function Form1() {
  const [inputs, setInputs] = useState([]);

  const handleInputChange = (e) => {
    let target = e.target;
    let input = target.value;
    let name = target.name;

    setInputs({
      ...inputs,
      [name]: input
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Obrigado '+ inputs.nome + ', seu formulário foi enviado com sucesso!');

    addDoc(colRef, {
      name: inputs.nome,
      email: inputs.email,
      tel: inputs.tel,
      date: new Date().toDateString()
    })
    .then( ()=> {
      window.location.href='/form-react/'
    })
  }

  console.log(Object.values(inputs));

  const isErrorNome = inputs.nome === '';
  const isErrorEmail = inputs.email === '';
  const isErrorTel = inputs.tel === '';

  return (
    <Box
      h="100vh"
      backgroundColor="#2F5D62">
      <form onSubmit={handleSubmit}>
        <Stack maxWidth={800} margin="auto" spacing={5} paddingTop={5}>
          <FormLabel as='legend' fontSize={32} color="#A7C4BC">Form Test React</FormLabel>
          <FormControl isInvalid={isErrorNome}>
            <FormLabel htmlFor="nome" color="#A7C4BC">Nome: </FormLabel>
            <Input 
              isRequired 
              id="nome" 
              name="nome" 
              type="text" 
              value={inputs.nome} 
              onChange={handleInputChange} 
              placeholder="ex: Fulano da Silva"
              size="md"
               />
              {!isErrorNome ? (
                <FormHelperText color="#A7C4BC">
                  Insira o seu nome.
                </FormHelperText>
              ) : (
                <FormErrorMessage>
                  É necessário informar seu nome.
                </FormErrorMessage>
              )}
          </FormControl>
          <FormControl isInvalid={isErrorEmail}>
            <FormLabel htmlFor="email" color="#A7C4BC">E-mail: </FormLabel>
              <Input 
                name="email"
                id="email"
                type="email" 
                value={inputs.email}
                onChange={handleInputChange} 
                placeholder="ex: fulano93@gmail.com" 
                isRequired 
                />
              {!isErrorEmail ? (
                <FormHelperText color="#A7C4BC">
                  Insira o seu e-mail.
                </FormHelperText>
              ) : (
                <FormErrorMessage>É necessário informar um e-mail válido.</FormErrorMessage>
              )}
          </FormControl>
          <FormControl isInvalid={isErrorTel}>
            <FormLabel hrmlFor="tel" color="#A7C4BC">Telefone: </FormLabel>
            <Input 
              name="tel"
              id="tel" 
              type="tel" 
              value={inputs.tel} 
              onChange={handleInputChange} 
              placeholder="ex: (00) 9 0000-0000" 
              isRequired
              size="md"
              />
            {!isErrorTel ? (
                <FormHelperText color="#A7C4BC">
                  Insira o seu telefone.
                </FormHelperText>
              ) : (
                <FormErrorMessage>É necessário informar um número de telefone válido.</FormErrorMessage>
              )}
          </FormControl>
          <FormControl>
            <Button
            type="submit" 
            value="Enviar"
            color="#2F5D62"
            >
              Enviar
            </Button>
          </FormControl>
        </Stack>
      </form>
    </Box>
  )
}
