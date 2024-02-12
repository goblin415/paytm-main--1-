import { Link, Route, Routes } from "react-router-dom"
import Signup from "../Components/Signup"
import Signin from "../Components/Signin"
import Dashbord from "../Components/Dashbord"
import Send from "../Components/Send"


function App() {

  return (
    <>
      hello 
      <Routes>
        <Route to="/signup" element={<Signup></Signup>}></Route>
        <Route to="/signin" element={<Signin></Signin>}></Route>
        <Route to="/dashbord" element={<Dashbord></Dashbord>}></Route>
        <Route to="/send" element={<Send></Send>}></Route>
      </Routes>
    </>
  )
}

export default App
