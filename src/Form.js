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
    let target = e.target
    let value = target.value
    let name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    // alert('Obrigado ' + this.target.nome + 'seu formulário foi enviado com sucesso!')
    console.log(this.state)
    // window.location.href="/"
    e.preventDefault()
  }

  render() {
    const isErrorName = this.state.nome === ''
    const isErrorEmail = this.state.email === ''
    const isErrorTel = this.state.tel === ''

    return (
    <>
      <form method="POST" onSubmit={this.handleSubmit}>
        <Stack maxWidth={800} margin="auto" spacing={5} marginTop={5}>
          <FormLabel as='legend' fontSize={32}>Form Test React</FormLabel>
          <FormControl isInvalid={isErrorName}>
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
              {!isErrorName ? (
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
                value={this.state.email} 
                aria-describedby="email-helper-text"
                onChange={this.handleChange} 
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
              value={this.state.tel} 
              onChange={this.handleChange} 
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
    );
  }
}