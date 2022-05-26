import React, { useEffect, useState } from 'react'
import { Stack, Button, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage} from '@chakra-ui/core';

const initialInput = {
  nome: '',
  email: '',
  tel: ''
};

const LOCAL_STORAGE_KEY = 'inputStore.FormF'

export default function FormF() {
  const [inputs, setInputs] = useState([initialInput]);

  useEffect(() => {
    const storedInputs = (localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedInputs) setInputs(storedInputs);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify)
  }, [inputs]);

  const handleInputChange = (e) => {
    // const { name, input } = e.target;
    let target = e.target;
    let input = target.value;
    let name = target.name;

    setInputs({
      ...inputs,
      [name]: input
    });
  };

  const handleSubmit = (e) => {
    alert('Obrigado '+ inputs.nome + ', seu formulário foi enviado com sucesso!')
    console.log(inputs)
    // window.location.href="/"
    e.preventDefault()
  }

  const isErrorNome = inputs.nome === '';
  const isErrorEmail = inputs.email === '';
  const isErrorTel = inputs.tel === '';
  console.log(inputs.nome);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack maxWidth={800} margin="auto" spacing={5} marginTop={5}>
          <FormLabel as='legend' fontSize={32}>Form Test React</FormLabel>
          <FormControl isInvalid={isErrorNome}>
            <FormLabel htmlFor="nome">Nome: </FormLabel>
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
                <FormHelperText>
                  Insira o seu nome.
                </FormHelperText>
              ) : (
                <FormErrorMessage>
                  É necessário informar seu nome.
                </FormErrorMessage>
              )}
          </FormControl>
          <FormControl isInvalid={isErrorEmail}>
            <FormLabel htmlFor="email">E-mail: </FormLabel>
              <Input 
                name="email"
                id="email"
                type="email" 
                value={inputs.email} 
                aria-describedby="email-helper-text"
                onChange={handleInputChange} 
                placeholder="ex: fulano93@gmail.com" 
                isRequired 
                />
              {!isErrorEmail ? (
                <FormHelperText>
                  Insira o seu e-mail.
                </FormHelperText>
              ) : (
                <FormErrorMessage>É necessário informar um e-mail válido.</FormErrorMessage>
              )}
          </FormControl>
          <FormControl isInvalid={isErrorTel}>
            <FormLabel hrmlFor="tel">Telefone: </FormLabel>
            <Input 
              name="tel"
              id="tel" 
              type="tel" 
              value={inputs.tel} 
              onChange={handleInputChange} 
              placeholder="ex: (00) 9 0000-0000" 
              isRequired 
              />
            {!isErrorTel ? (
                <FormHelperText>
                  Insira o seu telefone.
                </FormHelperText>
              ) : (
                <FormErrorMessage>É necessário informar um número de telefone.</FormErrorMessage>
              )}
          </FormControl>
          <FormControl>
            <Button 
            variantColor="red"
            type="submit" 
            value="Enviar" 
            >
              Enviar
            </Button>
          </FormControl>
        </Stack>
      </form>
    </>
  )
}
