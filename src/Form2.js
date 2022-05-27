import React from "react";
import { Stack, Button, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Box} from '@chakra-ui/core';

export default class Form2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      email: '',
      tel: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let target = e.target
    let value = target.value
    let name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    alert('Obrigado '+ this.state.nome + ', seu formulário foi enviado com sucesso!')
    console.log(this.state)
    window.location.href=<Home />
    e.preventDefault()
  }

  render() {
    const isErrorName = this.state.nome === ''
    const isErrorEmail = this.state.email === ''
    const isErrorTel = this.state.tel === ''
    
    return (
    <Box
      h="100vh"
      backgroundColor="#2F5D62">
      <form onSubmit={this.handleSubmit}>
        <Stack maxWidth={800} margin="auto" spacing={5} paddingTop={5}>
          <FormLabel as='legend' fontSize={32} color="#A7C4BC">Form Test React</FormLabel>
          <FormControl isInvalid={isErrorName}>
            <FormLabel htmlFor="nome" color="#A7C4BC">Nome: </FormLabel>
            <Input 
              isRequired 
              id="nome" 
              name="nome" 
              type="text" 
              value={this.state.name} 
              onChange={this.handleChange} 
              placeholder="ex: Fulano da Silva"
              size="md"
               />
              {!isErrorName ? (
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
                value={this.state.email} 
                aria-describedby="email-helper-text"
                onChange={this.handleChange} 
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
              value={this.state.tel} 
              onChange={this.handleChange} 
              placeholder="ex: (00) 9 0000-0000" 
              isRequired 
              />
            {!isErrorTel ? (
                <FormHelperText color="#A7C4BC">
                  Insira o seu telefone.
                </FormHelperText>
              ) : (
                <FormErrorMessage>É necessário informar um número de telefone.</FormErrorMessage>
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
    );
  }
}
