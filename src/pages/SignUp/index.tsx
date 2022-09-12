import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import FormSignUp from "../../components/SignUpForm";
import { motion } from "framer-motion";

import { HeaderSignUp, SignContainer } from "./style";

export default function SignUp() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <HeaderSignUp>
        <img src={logo} alt="logo da Kenzie Hub" />
        <Link className="btnVoltar" to={"/"}>
          Voltar
        </Link>
      </HeaderSignUp>
      <SignContainer>
        <h3>Crie sua conta</h3>
        <p>Rápido, grátis, vamos nessa</p>
        <FormSignUp />
      </SignContainer>
    </motion.div>
  );
}
