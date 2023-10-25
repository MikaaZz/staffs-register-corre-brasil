'use client';
import { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';

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
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return <Typography>Dashboard</Typography>;
}
