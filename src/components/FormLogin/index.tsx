import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function FormLogin() {
  const { handleLogin } = useContext(UserContext);

  interface IUserData {
    email: string;
    password: string;
  }

  const formSchema = yup.object().shape({
    email: yup.string().required("e-mail obrigatório").email("e-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <label htmlFor='email'>Email</label>
      <input type='email' placeholder='E-mail' {...register("email")} />
      <span>{errors.email?.message}</span>

      <label htmlFor='password'>Senha</label>
      <input type='password' placeholder='Senha' {...register("password")} />
      <span>{errors.password?.message}</span>

      <button type='submit'>Entrar</button>
    </form>
  );
}
