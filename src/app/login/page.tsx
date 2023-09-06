"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Grid, Typography } from "@mui/material";
import { useUserManagement } from "@/shared/context/UserContext";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

export default function Login() {
  const router = useRouter();

  const { userManager } = useUserManagement();
  const [isRegister, setIsRegister] = useState(Boolean);

  const submitForm: (data: any) => void = async (data: any) => {
    if (!data.email) {
      return alert("Informe um email valido");
    } else if (!data.password) {
      return alert("Informe uma senha valido");
    }
    if (isRegister) {
      if (!data.name) {
        return alert("Informe um nome valido");
      }
      const registerResponse = await userManager.registerNewAccount(data.name, data.email, data.password, data.location);
      if (registerResponse.isOK) {
        router.push("/");
      } else {
        alert(registerResponse.msg);
      }
    } else {
      const resp = await userManager.loginForm(data.email, data.password);
      if (resp.isOK) {
        router.push("/");
      } else {
        alert(resp.msg);
      }
    }
  };

  useEffect(() => {
    userManager.isLogged && router.push('/')
  })

  return (
    <Grid container item xs={12} mx={"auto"} mb={10} justifyContent={"center"} direction={"column"}>
      {isRegister ? (
        <RegisterForm submitForm={submitForm} changeForm={() => setIsRegister(false)}></RegisterForm>
      ) : (
        <LoginForm submitForm={submitForm} changeForm={() => setIsRegister(true)}></LoginForm>
      )}
    </Grid>
  );
}
