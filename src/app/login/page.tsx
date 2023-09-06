"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Grid, Paper, Typography } from "@mui/material";
import { useUserManagement } from "@/shared/context/UserContext";
import { UFTextField } from "../components/UFTextField";
import { UFMainButton } from "../components/UFMainButton";
import { Form } from "@unform/web";

export default function Login() {
  const router = useRouter();

  const { userManager } = useUserManagement();

  const submitForm: (data: any) => void = async (data: any) => {
    if (!data.email) {
      return alert("Informe um email valido");
    } else if (!data.password) {
      return alert("Informe uma senha valido");
    }
    const resp = await userManager.loginForm(data.email, data.password);
    if (resp.isOK) {
      router.push("/dashboard");
    } else {
      alert(resp.msg);
    }
  };

  useEffect(() => {
    userManager.isLogged && router.push('/')
  })

  return (
    <Grid container item xs={12} mx={"auto"} mb={10} justifyContent={"center"} direction={"column"}>
      <Grid>
        <Grid item mb={10}>
          <Typography textAlign={"center"} fontSize={30} color={"text.primary"}>
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
                borderRadius: "50px",
              }}
              mx="auto"
              width={"90%"}
              container
              rowSpacing={3}
              direction={"column"}>
              <Grid container item xs={12} mx={"auto"} justifyContent={"center"}>
                <Typography fontWeight={700} fontSize={40} color={"textSecondary"}>
                  Login
                </Typography>
              </Grid>
              <Grid container item direction={"row"}>
                <Grid xs={12} item>
                  <UFTextField fullWidth name="email" label={"E-mail"} />
                </Grid>
              </Grid>
              <Grid container item direction={"row"}>
                <Grid container item xs={12} justifyContent={"flex-end"}>
                  <UFTextField fullWidth type="password" name="password" label={"Senha"} />
                </Grid>
              </Grid>
              <Grid xs={12} mx={"auto"} justifyContent={"space-between"} container item>
                <Grid xs={12} item>
                  <UFMainButton type="submit">Login</UFMainButton>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        </Grid>
      </Grid>
    </Grid>
  );
}
