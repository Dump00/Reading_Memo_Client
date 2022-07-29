import { useState } from "react";
import AdminDashBoard from "./components/AdminDashBoard/AdminDashBoard";
import NavBar from "./components/NavBar/NavBar";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import UserDashBoard from "./components/UserDashBoard/UserDashBoard";
import Book from "./model/Book";
import BOOKS from "./model/bookdata";
import USER_DATA from './model/userdata'
import './App.css'
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";


const App = () => {

  const[userData, setUserData] = useState(USER_DATA)
  const[bookData, setBookData] = useState<Book[]>(BOOKS)


  return (
    <div className="container-fluid">
      <div className="col-12 m-auto">
      <NavBar />
      <Routes>

        
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userdb" element={<UserDashBoard bookList={bookData} userDataList={userData[0]}/>} />
        <Route path="/admindb" element={<AdminDashBoard bookList={bookData}/>} />
        <Route path="/" element={<SignIn />} />

        {/* <SignIn />
        <SignUp />
        <UserDashBoard bookList={bookData} userDataList={userData[0]}/>
        <AdminDashBoard bookList={bookData}/> */}
      </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
