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


const App = () => {

  const[userData, setUserData] = useState(USER_DATA)
  const[bookData, setBookData] = useState<Book[]>(BOOKS)

  // console.log(userData);
  // console.log(bookData);
  
  
  

  return (
    <div className="container-fluid">
      <div className="col-12 m-auto">
      <NavBar />
      <SignIn />
      {/* <SignUp /> */}
      {/* <UserDashBoard bookList={bookData} userDataList={userData[0]}/> */}
      {/* <AdminDashBoard bookList={bookData}/> */}
      <Footer />
      </div>
    </div>
  );
}

export default App;
