import { useContext } from "react";
import { CgTrash } from "react-icons/cg";
import { UserContext } from "../../context/UserContext";

import { ListContainer } from "./style";

export default function TechsList() {
  const { userTechs, handleRemoveTech } = useContext(UserContext);
  console.log(userTechs);
  return (
    <ListContainer>
      {userTechs.map((tech) => (
        <li key={tech.id}>
          <p className='techTitle'>{tech.title}</p>
          <div>
            <p className='techStatus'>{tech.status}</p>
            <CgTrash type='button' onClick={() => handleRemoveTech(tech.id)} />
          </div>
        </li>
      ))}
    </ListContainer>
  );
}
