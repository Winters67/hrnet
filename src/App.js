import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import EmployeList from "./views/EmployeList/EmployeList";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<EmployeList />} />
      </Routes>
    </div>
  );
}

export default App;
