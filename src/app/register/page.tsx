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
    await firebase.registerUser(data);
    route.push('/');
  };

  return (
    <Grid
      alignItems={'center'}
      container
      component="main"
      justifyContent={'center'}
      sx={{ height: '100vh' }}
    >
      <Grid item xs={12}>
        <Typography variant="h4">Register</Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper component={`form`}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                label="First Name"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Last Name"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Location"
                name="location"
                value={data.location}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
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
                label="Allow Contact"
                name="allowContact"
                value={data.allowContact}
              />
            </Grid>
            <Grid item xs={12}>
              <Button onClick={handleRegister}>Register</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
