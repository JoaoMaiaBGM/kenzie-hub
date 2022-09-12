import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import { ModalContainer } from "./style";

export default function Modal() {
  const { handleAddTech, modal, setModal } = useContext(UserContext);

  interface ITechData {
    id: string;
    title: string;
    status: string;
    setModal: boolean;
  }

  const formSchema = yup.object().shape({
    title: yup.string().required("A tech é obrigatória"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITechData>({ resolver: yupResolver(formSchema) });

  return (
    <ModalContainer>
      <div>
        <h3>Cadastrar tecnologia</h3>
        <button className='closeModal' onClick={() => setModal(!modal)}>
          X
        </button>
      </div>

      <form onSubmit={handleSubmit(handleAddTech)}>
        <label htmlFor='title'>Nome</label>
        <input
          type='text'
          placeholder='Nome da tecnologia'
          {...register("title")}
        />
        <span>{errors.title?.message}</span>

        <label htmlFor='status'>Status</label>
        <select id='status' {...register("status")}>
          <option value='Iniciante'>Iniciante</option>
          <option value='Intermediário'>Intermediário</option>
          <option value='Avançado'>Avançado</option>
        </select>
        <span>{errors.status?.message}</span>

        <button type='submit'>Cadastrar tecnologia</button>
      </form>
    </ModalContainer>
  );
}
