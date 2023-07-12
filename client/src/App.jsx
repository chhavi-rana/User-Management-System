import Home from "./Home";
import CreateUser from "./CreateUser";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<CreateUser />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
