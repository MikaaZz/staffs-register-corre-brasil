'use client';

import { useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

import { Firebase, UserModelData } from '@/database/firebase';
import { useRouter } from 'next/navigation';

export default function Register() {
  const firebase = new Firebase();
  const route = useRouter();
  const [data, setData] = useState<UserModelData>({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    phoneNumber: ``,
    allowContact: false,
  });

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    // Remove tudo exceto números
    value = value.replace(/\D/g, '');

    // Adicionar os símbolos (, ) e - de acordo com o tamanho
    if (value.length > 0) {
      value = '(' + value;
    }
    if (value.length > 3) {
      value = value.slice(0, 3) + ') ' + value.slice(3);
    }
    if (value.length > 10) {
      value = value.slice(0, 10) + '-' + value.slice(10, 14);
    }

    const newUserData = { ...data, phoneNumber: value };
    setData(newUserData);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    const newUserData = { ...data, [name]: checked };
    setData(newUserData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    const saniteziedData = {
      ...data,
      phoneNumber: data.phoneNumber.replace(/\D/g, ''),
    };
    await firebase.registerUser(saniteziedData);
    route.push('/');
  };

  return (
    <Grid
      alignItems={'center'}
      justifyContent={'center'}
      alignContent={'center'}
      container
      component="main"
      sx={{ height: '100vh' }}
      rowGap={2}
    >
      <Grid item xs={12}>
        <Typography variant="h2" textAlign={'center'} fontWeight={700}>
          Fazer cadastro como Staff
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={4} rowGap={4}>
        <Paper component={`form`} elevation={6} sx={{ p: 4, borderRadius: 4 }}>
          <Grid
            container
            alignItems={'center'}
            justifyContent={'center'}
            rowGap={2}
            columnGap={2}
          >
            <Grid item xs={12} md>
              <TextField
                label="Primeiro nome"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md>
              <TextField
                label="Último nome"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="E-mail"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Cidade onde mora"
                name="location"
                value={data.location}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Telefone para contato"
                name="phoneNumber"
                value={data.phoneNumber}
                onChange={handlePhoneChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    id="allowContact"
                    value="allowExtraEmails"
                    color="primary"
                    onChange={handleCheckboxChange}
                  />
                }
                label="Aceito receber mensagens e e-mails"
                name="allowContact"
                value={data.allowContact}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                onClick={handleRegister}
                sx={{
                  textTransform: 'none',
                }}
                fullWidth
              >
                Cadastrar meus dados
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
