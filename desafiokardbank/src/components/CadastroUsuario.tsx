import { Box, Grid, TextField, Typography, Button } from '@mui/material';
import { useState, ChangeEvent } from 'react';
import User from '../models/User';
import { cadastroUsuario } from '../services/Service';


function CadastroUsuario() {

  //model do usuário.
  const [user, setUser] = useState<User>(
    {
      id: 0,
      nome: '',
      email: '',
      cpf: '',
      telefone: ''
    })

  //Model fake para comparar com a model de usuário.
  const [userResult, setUserResult] = useState<User>(
    {
      id: 0,
      nome: '',
      email: '',
      cpf: '',
      telefone: ''
    })

  // Atualizar a model com os valores inserido pelo usuário.
  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

  }

  //Enviar o formulário
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    cadastroUsuario(`/usuarios`, user, setUserResult)
    alert('usuario cadastrado com sucesso')

  }

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid>
        <Box>
          <form onSubmit={onSubmit}>

            <Typography
              variant='h3'
              gutterBottom color='textPrimary'
              component='h3'
              align='center'
              className='textos-cadastro'>Cadastre-se
            </Typography>

            <TextField
              id='nome'
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              label='Nome'
              variant='outlined'
              type='text'
              name='nome'
              margin='normal'
              fullWidth
            />

            <TextField
              id='usuario'
              value={user.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              label='E-mail'
              variant='outlined'
              name='email'
              type='email'
              margin='normal'
              fullWidth
            />

            <TextField
              id='senha'
              value={user.cpf}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              label='CPF'
              variant='outlined'
              name='cpf'
              margin='normal'
              type='text'
              fullWidth
            />

            <TextField
              id='senha'
              value={user.telefone}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              label='Telefone'
              variant='outlined'
              name='telefone'
              margin='normal'
              type='tel'
              fullWidth
            />

            <Box marginTop={2} textAlign='center'>
              <Button variant='contained' type='submit' color='primary' >
                Cadastrar
              </Button>
            </Box>

          </form>
        </Box>
      </Grid>

    </Grid>
  );
}

export default CadastroUsuario;