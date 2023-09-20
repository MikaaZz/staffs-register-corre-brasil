'use client';

import { useState } from 'react';

import { Firebase } from '@/database/firebase';
import { Grid, Paper, Typography, TextField, Button } from '@mui/material';
import { Form } from '@unform/web';
import { useRouter } from 'next/navigation';

export type NewUserRegister = {
  name: string;
  email: string;
  location: string;
  cellphone: string;
};

export default function Register() {
  const router = useRouter();
  const userManager = new Firebase();

  const [data, setData] = useState<NewUserRegister>({
    name: '',
    email: '',
    location: '',
    cellphone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name;
    const newData = e.currentTarget.value;

    setData((prev) => ({
      ...prev,
      [key]: newData,
    }));
  };

  const handleRegister = async () => {
    if (!data.name) {
      return alert('Informe um nome valido');
    }
    const registerResponse = await userManager.registerNewUser(data);
    if (registerResponse.isOk) {
      router.push('/');
    } else {
      alert(registerResponse.msg);
    }
  };

  return (
    <Grid container alignItems={'center'} justifyContent={'center'} minHeight={'100vh'}>
      <Grid item xs>
        <Form onSubmit={handleRegister}>
          <Grid
            maxWidth={600}
            px={6}
            pt={0}
            pb={5}
            component={Paper}
            variant="outlined"
            sx={{
              borderRadius: '50px',
            }}
            mx="auto"
            width={'90%'}
            container
            rowSpacing={3}
            direction={'column'}
          >
            <Grid container item xs={12} mx={'auto'} justifyContent={'center'}>
              <Typography
                fontWeight={700}
                fontSize={40}
                color={'textSecondary'}
              >
                Cadastrar
              </Typography>
            </Grid>
            <Grid container item direction={'row'}>
              <Grid container item xs={12} justifyContent={'flex-end'}>
                <TextField
                  fullWidth
                  name="name"
                  label={'Nome:'}
                  value={data['name']}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container item direction={'row'}>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  name="email"
                  label={'E-mail:'}
                  value={data['email']}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container item direction={'row'}>
              <Grid container item xs={12} justifyContent={'flex-end'}>
                <TextField
                  fullWidth
                  name="location"
                  label={'Localização:'}
                  value={data['location']}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container item direction={'row'}>
              <Grid container item xs={12} justifyContent={'flex-end'}>
                <TextField
                  fullWidth
                  name="cellphone"
                  label={'Whatsapp para contato:'}
                  value={data['cellphone']}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              xs={12}
              mx={'auto'}
              justifyContent={'space-between'}
              container
              item
            >
              <Grid xs={12} item>
                <Button type="submit">Cadastrar</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item></Grid>
        </Form>
      </Grid>
    </Grid>
  );
}
