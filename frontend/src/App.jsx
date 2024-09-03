import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from "./pages/signUp"
import { Signin } from "./pages/signIn"
import { Dashboard } from "./pages/dashBoard"
import { SendMoney } from "./pages/send"


function App() {

  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/transfer" element={<SendMoney />}></Route>

      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
