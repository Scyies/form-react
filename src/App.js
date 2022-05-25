import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";

class App extends React.Component {
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
    e.preventDefault()
  }

  render() {
    return (
    <>
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Form Test React</legend>
          <p>
            <label>Nome:
              <input name="nome" type="text" value={this.state.nome} onChange={this.handleChange} placeholder="ex: Fulano da Silva" required />
            </label>
          </p>
          <p>
            <label>E-mail:
              <input name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="ex: fulano93@gmail.com" required />
            </label>
          </p>
          <p>
            <label>Telefone:
              <input name="tel" type="tel" value={this.state.tel} onChange={this.handleChange} placeholder="ex: (00) 9 0000-0000" required />
            </label>
          </p>
          <Link to="/home">
            <input type="submit" value="Enviar" />
          </Link>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </fieldset>
      </form>
    </>
    );
  }
}

export default App;
