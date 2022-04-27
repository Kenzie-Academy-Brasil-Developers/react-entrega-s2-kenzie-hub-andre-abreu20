import Logo from "../../components/Logo";
import { Container, FormContainer, LogoButtonContainer } from "./styles";
import Input from "../../components/Input";
import ButtonBlack from "../../components/ButtonBlack";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import DropDown from "../../components/DropDown";
import Button from "../../components/Button";
import api from "../../services/api.js";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

function Signup({ authenticated }) {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatorio*"),
    email: yup.string().required("Campo obrigatorio*").email("Email invalido"),
    password: yup
      .string()
      .required("Campo obrigatorio*")
      .min(6, "Minimo de 6 caracteres"),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatorio*")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
    course_module: yup.string().required("Selecione um Modulo*"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit({ name, email, password, course_module }) {
    const user = { name, email, password, course_module };
    const userRefactored = { ...user, bio: "Lorem ipsun", contact: "linkedin" };
    api
      .post("/users", userRefactored)
      .then((_) => {
        toast.success("Conta criada com sucesso!");
        history.push("/");
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
          <ButtonBlack
            width="79.54px"
            height="32px"
            onClick={() => history.push("/")}
          >
            Voltar
          </ButtonBlack>
        </LogoButtonContainer>
        <FormContainer>
          <form type="submit" onSubmit={handleSubmit(onSubmit)}>
            <h3>Crie sua Conta</h3>
            <span>Rapido e grátis, vamos nessa</span>
            <Input
              label="Nome"
              placeholder="Digite aqui seu nome"
              name="name"
              error={errors.name?.message}
              register={register}
            ></Input>
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
            ></Input>
            <Input
              label="Confirmar Senha"
              name="passwordConfirm"
              placeholder="Confirme sua senha"
              error={errors.passwordConfirm?.message}
              register={register}
              type="password"
            ></Input>
            <DropDown
              types={[
                "Primeiro módulo (Introdução ao Frontend)",
                "Segundo módulo (Frontend Avançado)",
                "Terceiro módulo (Introdução ao Backend)",
                "Quarto módulo (Backend Avançado)",
              ]}
              label="Selecionar módulo"
              register={register}
              defaultValue="Selecione uma categoria"
              name="course_module"
              error={errors.course_module?.message}
            ></DropDown>
            <Button
              placeholder="Cadastrar"
              maxWidth="300px"
              color="#59323F"
              type="submit"
            />
          </form>
        </FormContainer>
      </Container>
    </>
  );
}

export default Signup;
