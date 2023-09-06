'use client'

import { Firebase } from "@/database/firebase";
import UserModel from "@/models/UserModel";

import { useUserManagement } from "@/shared/context/UserContext";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserModel[]>([]); // novo estado para armazenar usuários

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
        setUsers(Object.values(userData));
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
    <Box>

      {users.map((userInfo) => {
        return (
          <Box key={userInfo.uid}>
            <Typography>
              Staff: {userInfo.name}
            </Typography>
            <Typography>
              Mora em: {userInfo.location}
            </Typography>
          </Box>
        )
      })}

    </Box>
  );
}
