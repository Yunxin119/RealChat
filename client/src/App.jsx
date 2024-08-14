// import modules
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

// import pages
import Login from "./screens/Login"
import SignUp from "./screens/SignUp"
import Home from "./screens/Home"


function App() {
  return (
    <div className="flex h-screen p-4 items-center justify-center">
      {/* <Home /> */}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
