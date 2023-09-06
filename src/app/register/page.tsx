'use client'

import { useUserManagement } from "@/shared/context/UserContext";
import { Grid, Paper, Typography } from "@mui/material";
import { Form } from "@unform/web";
import { useRouter } from "next/navigation";
import { UFTextField } from "../components/UFTextField";
import { UFMainButton } from "../components/UFMainButton";


export default function Register() {
  const router = useRouter();
  const { userManager } = useUserManagement();

  const handleRegister: (data: any) => void = async (data: any) => {
    if (!data.name) {
      return alert("Informe um nome valido");
    }
    const registerResponse = await userManager.registerNewAccount(data.name, data.email, data.location, data.cellphone);
    if (registerResponse.isOK) {
      router.push("/");
    } else {
      alert(registerResponse.msg);
    }
  }

  return (
    <Grid>
      <Grid item mb={10}>
        <Typography
          textAlign={"center"}
          fontSize={30}
          color={"text.primary"}
        >
          Faça Login.
        </Typography>
      </Grid>
      <Grid item>
        <Form onSubmit={handleRegister}>
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
            direction={"column"}
          >
            <Grid
              container
              item
              xs={12}
              mx={"auto"}
              justifyContent={"center"}
            >
              <Typography
                fontWeight={700}
                fontSize={40}
                color={"textSecondary"}
              >
                Cadastrar
              </Typography>
            </Grid>
            <Grid
              container
              item
              direction={"row"}
            >
              <Grid
                container
                item
                xs={12}
                justifyContent={"flex-end"}
              >
                <UFTextField
                  fullWidth
                  name="name"
                  label={"Nome:"}
                />
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction={"row"}
            >
              <Grid xs={12} item>
                <UFTextField
                  fullWidth
                  name="email"
                  label={"E-mail:"}
                />
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction={"row"}
            >
              <Grid
                container
                item
                xs={12}
                justifyContent={"flex-end"}
              >
                <UFTextField
                  fullWidth
                  name="location"
                  label={"Localização:"}
                />
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction={"row"}
            >
              <Grid
                container
                item
                xs={12}
                justifyContent={"flex-end"}
              >
                <UFTextField
                  fullWidth
                  name="cellphone"
                  label={"Whatsapp para contato:"}
                />
              </Grid>
            </Grid>
            <Grid
              xs={12}
              mx={"auto"}
              justifyContent={"space-between"}
              container
              item
            >
              <Grid xs={12} item>
                <UFMainButton type="submit">
                  Cadastrar
                </UFMainButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item></Grid>
        </Form>
      </Grid>
    </Grid>
  );
}
