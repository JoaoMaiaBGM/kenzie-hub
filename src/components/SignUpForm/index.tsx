import { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputMask from "react-input-mask";
import { UserContext } from "../../context/UserContext";

export default function FormSignUp() {
  const { handleSignUp } = useContext(UserContext);

  interface IUserData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    bio: string;
    contact: string;
    course_module: string;
  }

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .required("e-mail é obrigatório")
      .email("e-mail inválido"),
    password: yup
      .string()
      .required("Senha é obrigatória")
      .matches(
        /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
        "Senha, no mínimo 8 letras, uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
      ),
    confirmPassword: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password")], "Senha não confere"),
    bio: yup.string().required("Bio é obrigatório"),
    contact: yup.string().required("Contato é obrigatório"),
    course_module: yup.string().required("O módulo é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <label htmlFor='name'>Nome</label>
      <input
        type='text'
        placeholder='Digite aqui seu nome'
        {...register("name")}
      />
      <span>{errors.name?.message}</span>

      <label htmlFor='email'>Email</label>
      <input
        type='email'
        placeholder='Digite aqui seu email'
        {...register("email")}
      />
      <span>{errors.email?.message}</span>

      <label htmlFor='password'>Senha</label>
      <input
        type='password'
        placeholder='Digite aqui sua senha'
        {...register("password")}
      />
      <span>{errors.password?.message}</span>

      <label htmlFor='confirmPassword'>Confirmar senha</label>
      <input
        type='password'
        placeholder='Confirme sua senha'
        {...register("confirmPassword")}
      />
      <span>{errors.confirmPassword?.message}</span>

      <label htmlFor='bio'>Bio</label>
      <input type='text' placeholder='Fale sobre você' {...register("bio")} />
      <span>{errors.bio?.message}</span>

      <label htmlFor='modules'>Selecionar módulo</label>
      <select {...register("course_module")}>
        <option value='Primeiro módulo (Introdução ao Frontend)'>
          Primeiro módulo
        </option>
        <option value='Segundo módulo (Frontend Avançado)'>
          Segundo módulo
        </option>
        <option value='Terceiro módulo (Introdução ao Backend)'>
          Terceiro módulo
        </option>
        <option value='Quarto módulo (Backend Avançado)'>Quarto módulo</option>
      </select>
      <span>{errors.course_module?.message}</span>

      <label htmlFor='contact'>Contato</label>
      <InputMask
        mask='(99)9.9999-9999'
        type='text'
        placeholder='Opção de contato'
        {...register("contact")}
      />
      <span>{errors.contact?.message}</span>

      <button type='submit'>Cadastrar</button>
    </form>
  );
}
