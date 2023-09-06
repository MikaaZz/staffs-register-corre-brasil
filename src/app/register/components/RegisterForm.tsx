import { UFMainButton } from "@/app/components/UFMainButton";
import { UFTextField } from "@/app/components/UFTextField";
import {
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Form } from "@unform/web";

interface IRegisterFormProps {
  changeForm: () => void;
  submitForm: (data: any) => void;
}

export default function RegisterForm(
  props: IRegisterFormProps
) {
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
                  type="password"
                  name="password"
                  label={"Senha:"}
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
              xs={12}
              mx={"auto"}
              justifyContent={"space-between"}
              container
              item
            >
              <Grid xs={5} item>
                <UFMainButton type="submit">
                  Cadastrar
                </UFMainButton>
              </Grid>
              <Grid xs={5} item>
                <UFMainButton
                  warning={true}
                  type="submit"
                  onClick={props.changeForm}
                >
                  Voltar ao Login
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
