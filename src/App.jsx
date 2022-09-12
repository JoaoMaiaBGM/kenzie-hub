import MainRoutes from "./routes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <ToastContainer autoClose={3000} />
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;
