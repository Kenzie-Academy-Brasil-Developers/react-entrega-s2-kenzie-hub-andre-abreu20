import Logo from "../../components/Logo";
import { Container, FormContainer, LogoButtonContainer } from "./styles";
import Input from "../../components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import api from "../../services/api.js";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { BsFillEyeFill } from "react-icons/bs";
import { Redirect } from "react-router-dom";

function Login({ authenticated, setAuthenticated }) {
  const history = useHistory();
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatorio*").email("Email invalido"),
    password: yup
      .string()
      .required("Campo obrigatorio*")
      .min(6, "Minimo de 6 caracteres"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit({ email, password }) {
    const user = { email, password };
    api
      .post("/sessions", user)
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));
        setAuthenticated(true);
        history.push("/dashboard");
      })
      .catch((_) => {
        toast.error("Ops! Algo deu errado");
      });
  }

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Container>
        <LogoButtonContainer>
          <Logo />
        </LogoButtonContainer>
        <FormContainer>
          <form type="submit" onSubmit={handleSubmit(onSubmit)}>
            <h3>Login</h3>
            <Input
              label="Email"
              placeholder="Digite aqui seu email"
              name="email"
              error={errors.email?.message}
              register={register}
            ></Input>
            <Input
              label="Senha"
              name="password"
              placeholder="Digite aqui sua senha"
              error={errors.password?.message}
              register={register}
              type="password"
              icon={BsFillEyeFill}
            ></Input>
            <Button
              placeholder="Entrar"
              maxWidth="300px"
              color="#FF577F"
              type="submit"
            />
            <span>
              <Link to="/signup">Ainda não possui uma conta?</Link>
            </span>
            <Button
              placeholder="Cadastrar"
              maxWidth="300px"
              color="#868E96"
              type="button"
              onClick={() => history.push("/signup")}
            />
          </form>
        </FormContainer>
      </Container>
    </>
  );
}

export default Login;
