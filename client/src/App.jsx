import Home from "./components/Home";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import ViewUser from "./components/ViewUser";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<CreateUser />}></Route>
        <Route path="/update/:id" element={<UpdateUser />}></Route>
        <Route path="/view/:id" element={<ViewUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
