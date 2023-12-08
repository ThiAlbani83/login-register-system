import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Reset from './pages/reset'

function App() {

  return (
    <main>
     <Router>
          <Routes>
            <Route path="/" element={<SignIn />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/home" element={<h5><Home /></h5>} />
            <Route path="/reset" element={<h5><Reset /></h5>} />
          </Routes>
      </Router>
    </main>
  )
}

export default App
