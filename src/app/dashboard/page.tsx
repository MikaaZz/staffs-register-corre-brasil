'use client';
import { useEffect, useState } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

import {
  CityFrequency,
  sortLocationsByFrequency,
} from '@/shared/utils/sortLocationsByFrequency';
import { UserData } from '@/database/dashboard';
import { UserModelData } from '@/database/firebase';

export default function Dashboard() {
  const dataInstance = new UserData();

  const [locations, setLocations] = useState<CityFrequency[]>([]);
  const [users, setUsers] = useState<UserModelData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataFetch = await dataInstance.getUserData();
        const userData: UserModelData[] = Object.values(userDataFetch);
        setUsers(userData);

        const locations = userData.map((user) => user.location);
        const sortedLocations = sortLocationsByFrequency(locations);
        setLocations(sortedLocations);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  });

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Grid container justifyContent={'center'} maxWidth={'xl'} mx={'auto'} columnGap={2} rowGap={2} my={4}>
      <Grid container item lg={3} rowGap={2}>
        <Grid
          item
          container
          bgcolor={'background.paper'}
          p={4}
          borderRadius={2}
          direction={'column'}
          rowGap={2}
          component={Paper}
        >
          <Typography variant="h5" color={'GrayText'} textAlign={'left'}>
            Total de Staffs:
          </Typography>
          <Typography variant="h2" color={'textPrimary'} textAlign={'left'}>
            {users.length}
          </Typography>
        </Grid>
        <Grid
          container
          bgcolor={'background.paper'}
          p={4}
          borderRadius={2}
          direction={'column'}
          rowGap={2}
          component={Paper}
        >
          <Typography variant="h5" color={'GrayText'} textAlign={'left'}>
            Cidades com mais Staffs:
          </Typography>
          {locations.map((location, index) => {
            return (
              <Grid
                key={index}
                container
                item
                columnGap={2}
                rowGap={1}
                alignItems={'center'}
              >
                <Typography
                  variant="body1"
                  color={'textPrimary'}
                  textAlign={'left'}
                >
                  {location.city}:
                </Typography>
                <Typography
                  variant="body1"
                  color={'textPrimary'}
                  textAlign={'left'}
                  fontWeight={700}
                >
                  {location.quantity}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs
        bgcolor={'background.paper'}
        p={4}
        borderRadius={2}
        direction={'column'}
        rowGap={2}
        component={Paper}
      >
        <Grid
          container
          item
          borderBottom={'1px solid'}
          borderColor={'primary.main'}
          direction={{ xs: 'column', md: 'row' }}
        >
          <Grid item xs>
            <Typography color={'textPrimary'} textAlign={'center'} mb={1}>
              Staff:
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography color={'textPrimary'} textAlign={'center'} mb={1}>
              Mora em:
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography color={'textPrimary'} textAlign={'center'} mb={1}>
              E-mail:
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography color={'textPrimary'} textAlign={'center'} mb={1}>
              Whatsapp:
            </Typography>
          </Grid>
        </Grid>
        {users.map((userInfo) => {
          return (
            <Grid
              container
              item
              key={userInfo.firstName + userInfo.lastName}
              borderBottom={'1px solid'}
              borderColor={'primary.main'}
              direction={{ xs: 'column', md: 'row' }}
            >
              <Grid item xs>
                <Typography color={'textPrimary'} textAlign={'center'} mb={1}>
                  {userInfo.firstName} {userInfo.lastName}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography color={'textPrimary'} textAlign={'center'} mb={1}>
                  {userInfo.location}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography color={'textPrimary'} textAlign={'center'} mb={1}>
                  {userInfo.email}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography color={'textPrimary'} textAlign={'center'} mb={1}>
                  {userInfo.phoneNumber}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
