import React from "react";
import { Stack, Button, FormControl, FormLabel, Input, InputGroup, FormHelperText, FormErrorMessage} from '@chakra-ui/core';

export default class Form extends React.Component {
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
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    // alert('Obrigado ' + this.target.name + 'seu formulário foi enviado com sucesso!')
    console.log(this.state)
    // window.location.href="/"
    e.preventDefault()
  }

  render() {
    const isError = this.state.name === '' || this.state.email === '' || this.state.tel === ''
    console.log(this.state.name);

    return (
    <>
      <form method="POST" onSubmit={this.handleSubmit}>
        <Stack maxWidth={800} margin="auto" spacing={5} marginTop={5}>
          <legend>Form Test React</legend>
          <FormControl isInvalid={isError}>
            <FormLabel htmlFor="nome">Nome: </FormLabel>
            <Input 
              isRequired 
              id="nome" 
              name="nome" 
              type="text" 
              value={this.state.nome} 
              onChange={this.handleChange} 
              placeholder="ex: Fulano da Silva"
              size="md"
               />
              {!isError ? (
                <FormHelperText>
                  Insira o seu nome.
                </FormHelperText>
              ) : (
                <FormErrorMessage>
                  É necessário informar seu nome.
                </FormErrorMessage>
              )}
          </FormControl>
          <FormControl isInvalid={isError}>
            <FormLabel htmlFor="email">E-mail: </FormLabel>
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
              {!isError ? (
                <FormHelperText>
                  Insira o seu e-mail.
                </FormHelperText>
              ) : (
                <FormErrorMessage>É necessário informar um e-mail válido.</FormErrorMessage>
              )}
          </FormControl>
          <FormControl isInvalid={isError}>
            <FormLabel hrmlFor="tel">Telefone: </FormLabel>
            <Input 
              name="tel"
              id="tel" 
              type="tel" 
              value={this.state.tel} 
              onChange={this.handleChange} 
              placeholder="ex: (00) 9 0000-0000" 
              isRequired 
              />
            {!isError ? (
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
            disabled={isError}>
              Enviar
            </Button>
          </FormControl>
        </Stack>
      </form>
    </>
    );
  }
}