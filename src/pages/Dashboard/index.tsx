import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { motion } from "framer-motion";
import { UserContext } from "../../context/UserContext";
import TechsList from "../../components/TechsList";
import { BsPlusSquareFill } from "react-icons/bs";
import Modal from "../../components/ModalForm";

import {
  CardContainer,
  DashBoardContainer,
  DashboardHeader,
  TechsContainer,
} from "./style";

export default function Dashboard() {
  const { user, userTechs, handleLogout, modal, setModal } =
    useContext(UserContext);

  return (
    <DashBoardContainer>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
        {modal && <Modal />}
        <DashboardHeader>
          <img src={logo} alt='logo da Kenzie Hub' />
          <Link className='logout' to={"/"} onClick={handleLogout}>
            Sair
          </Link>
        </DashboardHeader>
        <CardContainer>
          <p className='userName'>Olá, {user?.name}</p>
          <span className='userModule'>{user?.course_module}</span>
        </CardContainer>
        <TechsContainer>
          <header>
            <h2>Tecnologias</h2>
            <BsPlusSquareFill type='button' onClick={() => setModal(!modal)} />
          </header>
          {userTechs.length === 0 ? (
            <p className='techsList-info'>Você não possui tecnologia listada</p>
          ) : (
            <TechsList />
          )}
        </TechsContainer>
      </motion.section>
    </DashBoardContainer>
  );
}
