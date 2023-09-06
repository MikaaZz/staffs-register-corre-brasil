'use client'

import { Firebase } from "@/database/firebase";
import UserModel from "@/models/UserModel";

import { useUserManagement } from "@/shared/context/UserContext";
import { CityFrequency, sortLocationsByFrequency } from "@/shared/utils/sortLocationsByFrequency";
import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserModel[]>([]);
  const [sortedLocations, setSortedLocations] = useState<CityFrequency[]>([])

  const { userManager } = useUserManagement();

  const fireInstance = Firebase.getInstance();

  useEffect(() => {
    const verify = () => {
      userManager.checkLoginStatusAdmin(router, () => {
        setLoading(false);
      });
    };

    const fetchUsers = async () => {
      try {
        const userData = await userManager.getUsersData();
        const userModelData = Object.values(userData).map(UserModel.fromJson);
        setUsers(userModelData);
        setSortedLocations(sortLocationsByFrequency(userModelData))
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fireInstance.on("userLoadedChanged", verify);
    fetchUsers();

    return () => {
      fireInstance.off("userLoadedChanged", verify);
    };
  }, [fireInstance, userManager, router]);

  if (loading) return <Box>Loading</Box>;

  return (
    <Grid container maxWidth={'xl'} mx={'auto'} columnGap={2}>
      <Grid container item xs={3} rowGap={2}>
        <Grid item container bgcolor={'background.paper'} p={4} borderRadius={2} direction={'column'} rowGap={2}>
          <Typography variant="h5" color={'GrayText'} textAlign={'left'}>
            Total de Staffs:
          </Typography>
          <Typography variant="h2" color={'textPrimary'} textAlign={'left'}>
            {users.length - 1}
          </Typography>
        </Grid>
        <Grid container bgcolor={'background.paper'} p={4} borderRadius={2} direction={'column'} rowGap={2}>
          <Typography variant="h5" color={'GrayText'} textAlign={'left'}>
            Cidades com mais Staffs:
          </Typography>
          {sortedLocations.map((location, index) => {
            return (
              <Grid key={index} container item columnGap={2} rowGap={1} alignItems={'center'}>
                <Typography variant="body1" color={'textPrimary'} textAlign={'left'}>
                  {location.city}:
                </Typography>
                <Typography variant="body1" color={'textPrimary'} textAlign={'left'} fontWeight={700}>
                  {location.quantity}
                </Typography>
              </Grid>
            )
          })}

        </Grid>
      </Grid>
      <Grid container item xs bgcolor={'background.paper'} p={4} borderRadius={2} direction={'column'} rowGap={2}>
        <Grid container item borderBottom={'1px solid'} borderColor={'primary.main'}>
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
          return !userInfo.admin && (
            <Grid container item key={userInfo.uid} borderBottom={'1px solid'} borderColor={'primary.main'}>
              <Grid item xs>
                <Typography color={'textPrimary'} textAlign={'center'} mb={1}>
                  {userInfo.name}
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
                  {userInfo.cellphone}
                </Typography>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  );
}
