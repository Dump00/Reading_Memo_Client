import AdminDashBoard from "./components/AdminDashBoard/AdminDashBoard";
import NavBar from "./components/NavBar/NavBar";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import UserDashBoard from "./components/UserDashBoard/UserDashBoard";

const App = () => {
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
