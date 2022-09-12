import FormLogin from "../../components/FormLogin";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { motion } from "framer-motion";

import { HeaderLogin, LoginContainer } from "./style";

export default function Login() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <HeaderLogin>
        <img src={logo} alt="logo da Kenzie Hub" />
      </HeaderLogin>
      <LoginContainer>
        <h3>Login</h3>
        <FormLogin />
        <p>Ainda não possui uma conta?</p>
        <Link className="form-link" to={"/signup"}>
          Cadastre-se
        </Link>
      </LoginContainer>
    </motion.section>
  );
}
