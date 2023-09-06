//import material UI

"use client";

import { Button, Divider, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Form } from "@unform/web";
import Link from "next/link";
import { Google, Microsoft, GitHub } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUserManagement } from "@/shared/context/UserContext";
import { LoginProvider } from "@/shared/services/user/UserManager";
import UserReturnData from "@/models/UserReturnDataModel";
import { UFTextField } from "@/app/components/UFTextField";
import { UFMainButton } from "@/app/components/UFMainButton";

interface IRegisterFormProps {
  changeForm: () => void;
  submitForm: (data: any) => void;
}

export default function LoginForm(props: IRegisterFormProps) {
  const { userManager } = useUserManagement();
  const router = useRouter();

  async function loginPopOut() {
    const loginResponse: UserReturnData<boolean> = await userManager.loginGooglePopOut();

    if (loginResponse!.isOK) {
      if (loginResponse!.extraData) {
        router.push("/");
      }
    }
  }

  return (
    <Grid>
      <Grid item mb={10}>
        <Typography textAlign={"center"} fontSize={30} color={"text.primary"}>
          Faça Login.
        </Typography>
      </Grid>
      <Grid item>
        <Form onSubmit={props.submitForm}>
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
                <UFTextField fullWidth name="password" label={"Senha"} />
                <Link href={"/"}>
                  <Button
                    sx={{
                      color: "black",
                      textTransform: "none",
                    }}>
                    <Typography
                      sx={{
                        textDecoration: "underline",
                      }}>
                      Esqueceu sua senha?
                    </Typography>
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Grid xs={12} mx={"auto"} justifyContent={"space-between"} container item>
              <Grid xs={5} item>
                <UFMainButton type="submit">Login</UFMainButton>
              </Grid>
              <Grid xs={5} item>
                <UFMainButton warning={true} type="submit" onClick={props.changeForm}>
                  Registrar-se
                </UFMainButton>
              </Grid>
            </Grid>
            <Grid item>
              <Divider sx={{ borderBottomWidth: 2 }}></Divider>
            </Grid>
            <Grid item container xs={12} mx={"auto"} justifyContent={"center"}>
              <Typography color={"textSecondary"}>ou voce pode fazer loguin via</Typography>
            </Grid>
            {/* <Grid item container xs={12} gap={2} mx={"auto"} justifyContent={"center"}>
              <IconButton>
                <Google
                  onClick={() => loginPopOut()}
                  color="secondary"
                  fontSize="large"
                  sx={{
                    p: 1,
                    borderRadius: "50%",
                    border: "1px solid ",
                    borderColor: "background.primary",
                  }}
                />
              </IconButton>
            </Grid> */}
          </Grid>
        </Form>
      </Grid>
    </Grid>
  );
}
