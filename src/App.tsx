import { useState } from "react";
import AdminDashBoard from "./components/AdminDashBoard/AdminDashBoard";
import NavBar from "./components/NavBar/NavBar";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import UserDashBoard from "./components/UserDashBoard/UserDashBoard";
import DATA from "./model/userdata";

const App = () => {

  const[data, setData] = useState(DATA)

  console.log(data);
  

  return (
    <div className="container">
      <NavBar />
      <SignIn />
      <SignUp />
      <UserDashBoard />
      <AdminDashBoard />
    </div>
  );
}

export default App;
