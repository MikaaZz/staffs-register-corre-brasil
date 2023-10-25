'use client';
import { useState, useEffect } from 'react';

import { Auth } from '@/database/auth';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/database/firebaseConfig';
import Dashboard from '../dashboard/page';

export default function Login() {
  const authInstance = new Auth();
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const signOut = async () => {
    await authInstance.logout();
  };

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const loginResponse = await authInstance.loginWithEmail({
      email: userData.email,
      password: userData.password,
    });
    if (loginResponse.isLogged) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });
  }, []);

  if (!isLogged) {
    return (
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',

            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <Grid
          alignItems={'center'}
          justifyContent={'center'}
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Faça login para acessar esses dados
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Seu Email"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="password"
                    label="Sua senha"
                    name="password"
                    autoComplete="password"
                    onChange={handleChange}
                    type="password"
                  />
                </Grid>
              </Grid>
              <Button
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, textTransform: 'none', fontWeight: '500' }}
              >
                Fazer login
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid
      alignItems={'center'}
      container
      justifyContent={'center'}
      direction={'column'}
    >
      <Dashboard />
      <Grid
        alignItems={'center'}
        container
        component={Container}
        justifyContent={'center'}
        item
        xs
        maxWidth={'lg'}
      >
        <Button
          variant="contained"
          onClick={signOut}
          sx={{
            fontWeight: 600,
          }}
        >
          Deslogar
        </Button>
      </Grid>
    </Grid>
  );
}
