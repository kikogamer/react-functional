import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({aoEnviar}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();

      if (possoEnviar()) {
        aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
      }
    }}>
      <TextField
        onChange={(event) => setNome(event.target.value)}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        value={nome}
        fullWidth />
      <TextField
        onChange={(event) => setSobrenome(event.target.value)}
        value={sobrenome}
        id="sobrenome"
        label="Sobrenome" 
        variant="outlined" 
        margin="normal" 
        fullWidth />
      <TextField 
        onChange={(event) => setCpf(event.target.value)}
        onBlur={validarCampos}
        value={cpf}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf" 
        label="CPF" 
        name="cpf"
        variant="outlined" 
        margin="normal" 
        fullWidth />

      <FormControlLabel
        onChange={(event) => setPromocoes(event.target.checked)} 
        checked={promocoes}
        label="Promoções" 
        control={<Switch name="promocoes" color="primary" />} />
      
      <FormControlLabel 
        onChange={(event) => setNovidades(event.target.checked)} 
        checked={novidades}
        label="Novidades" 
        control={<Switch name="novidades" color="primary" />} />

      <Button type="submit" variant="contained" color="primary">Próximo</Button>

    </form>
  );
}

export default DadosPessoais;


