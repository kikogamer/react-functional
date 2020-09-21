import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto';
import { validarCPF, validarSenha } from './models/cadastro'
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" >Formulário de cadastro</Typography>
      <ValidacoesCadastro.Provider value={{cpf:validarCPF, senha:validarSenha}}>
        <FormularioCadastro aoEnviar={aoEnviarFormulario} />
      </ValidacoesCadastro.Provider>
    </Container>
  )
}

function aoEnviarFormulario(dados) {
  console.log(dados)
}

export default App;
