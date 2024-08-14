// import modules
import { Routes, Route, Navigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

// import pages
import Login from "./screens/Login"
import SignUp from "./screens/SignUp"
import Home from "./screens/Home"

// import hooks
import { useAuth } from "./context/AuthContext"

function App() {
  const { authUser } = useAuth()
  return (
    <div className="flex h-screen p-4 items-center justify-center">
      <Routes>
        <Route path='/login' element={authUser ? <Navigate to="/"/> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to="/"/> : <SignUp />} />
        <Route path='/' element={authUser ? <Home /> : <Navigate to="/login"/> } />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
