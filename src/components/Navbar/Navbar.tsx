'use client'

import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useUserManagement } from "@/shared/context/UserContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter();

  const { userManager } = useUserManagement();

  const handleClick = () => {
    router.push('/login')
  }


  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        {userManager.isLogged ? (
          <Typography>Bem vindo (a):{' '}{userManager.userName} </Typography>
        ) : (
          <Button onClick={handleClick} color="inherit">Login</Button>
        )}
      </Toolbar>
    </AppBar>
  )
}
export default Navbar;
