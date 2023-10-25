'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Button, Grid, Paper, Typography } from '@mui/material';

import { Form } from '@unform/web';
import { Firebase } from '@/database/firebase';

export default function Login() {
  const router = useRouter();

  const authManager = new Firebase();

  const submitForm = async () => {
    authManager.userGoogleLogin();
  };

  useEffect(() => {});

  return (
    <Grid
      container
      item
      xs={12}
      mx={'auto'}
      mb={10}
      justifyContent={'center'}
      direction={'column'}
    >
      <Grid>
        <Grid item mb={10}>
          <Typography textAlign={'center'} fontSize={30} color={'text.primary'}>
            Faça Login.
          </Typography>
        </Grid>
        <Grid item>
          <Form onSubmit={submitForm}>
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
              <Grid
                container
                item
                xs={12}
                mx={'auto'}
                justifyContent={'center'}
              >
                <Typography
                  fontWeight={700}
                  fontSize={40}
                  color={'textSecondary'}
                >
                  Login
                </Typography>
              </Grid>
              <Grid container item direction={'row'}>
                <Grid xs={12} item></Grid>
              </Grid>
              <Grid container item direction={'row'}>
                <Grid container item xs={12} justifyContent={'flex-end'}></Grid>
              </Grid>
              <Grid
                xs={12}
                mx={'auto'}
                justifyContent={'space-between'}
                container
                item
              >
                <Grid xs={12} item>
                  <Button type='submit'>Login com google</Button>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        </Grid>
      </Grid>
    </Grid>
  );
}
