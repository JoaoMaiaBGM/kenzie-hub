import {
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const UserContext = createContext<IUserProviderData>(
  {} as IUserProviderData
);

interface IUserLogin {
  email: string;
  password: string;
}

interface IUserSignUp {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface IUser {
  id: string;
  name: string;
  course_module: string;
  techs: string[];
}

interface IUserProps {
  children: ReactNode;
}

interface IDataTech {
  id: string;
  title: string;
  status: string;
}

interface IUserProviderData {
  handleLogin: (userData: IUserLogin) => void;
  handleSignUp: (user: IUserSignUp) => void;
  handleLogout: () => void;
  handleAddTech: (dataTech: IDataTech) => void;
  handleRemoveTech: (id: string) => void;
  user: IUser | null;
  userTechs: IDataTech[];
  modal: boolean;
  setModal: React.Dispatch<SetStateAction<boolean>>;
}

export default function Provider({ children }: IUserProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  const [userTechs, setUserTechs] = useState<IDataTech[]>([]);
  const [modal, setModal] = useState(false);

  async function handleLogin(userData: IUserLogin) {
    try {
      const response = await api.post("/sessions", { ...userData });

      const { user, token } = response.data;

      window.localStorage.setItem("userToken", token);

      setUser(user);
      setUserTechs([...user.techs]);

      navigate("/dashboard/", { replace: true });
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      toast.success("Login feito com sucesso");
    } catch (err) {
      console.log(err);
      toast.error("e-mail/senha inválidos");
    }
  }

  function handleSignUp(user: IUserSignUp) {
    api
      .post("/users", { ...user })
      .then((res) => {
        setTimeout(() => {
          navigate("/");
        }, 5000);
        toast.success("Cadastro feito com sucesso");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  }

  useEffect(() => {
    async function handleUserProfile() {
      const token = localStorage.getItem("userToken");

      if (token) {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;

          const { data } = await api.get("/profile");

          setUser(data);
          setUserTechs([...data.techs]);
        } catch (err) {
          console.log(err);
        }
      }
    }
    handleUserProfile();
  }, [setUser, setUserTechs]);

  function handleLogout() {
    window.localStorage.removeItem("userID");
    window.localStorage.removeItem("userToken");
  }

  function handleAddTech(dataTech: IDataTech) {
    const token = localStorage.getItem("userToken");

    try {
      api
        .post(
          "/users/techs",
          {
            title: dataTech.title,
            status: dataTech.status,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          setUserTechs([dataTech]);
          toast.success("Tecnologia adicionada com sucesso");
        });
    } catch (err) {
      console.log(err);
      toast.error("Algo deu errado! Tecnologia não adicionada");
    }
    setModal(false);
  }

  function handleRemoveTech(id: string) {
    api
      .delete(`/users/techs/${id}`)
      .then(() => {
        const response = userTechs.filter((tech) => id !== tech.id);
        setUserTechs(response);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! ocorreu um erro, recarregue a página");
      });
  }

  return (
    <>
      <UserContext.Provider
        value={{
          handleLogin,
          handleSignUp,
          handleLogout,
          handleAddTech,
          handleRemoveTech,
          user,
          userTechs,
          modal,
          setModal, //o estado está tipado como any, alterar na interface!!!
        }}>
        {children}
      </UserContext.Provider>
    </>
  );
}
