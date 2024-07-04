import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Login from './page/Login'
import Register from './page/Register'
import MainPage from './page/MainPage'
function App() {
  // const [authUser, setAuthUser] = useState(true);
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<Login/>}
        />
        <Route
          path="/register"
          element={<Register/>}
        />
         <Route
          path="/"
          element={<MainPage/>}
        />
       
       
        {/* <Route
          path="/login"
          element={ <Login />}
        >
          {/* <Route index element={<LoginForm />} /> */}
          {/* <Route path="register" element={<Register />} /> */}
          {/* <Route path="forgot" element={<ForgotPassword />} /> */}
        {/* </Route> */} 
      </Routes>
    </>
  )
}

export default App
