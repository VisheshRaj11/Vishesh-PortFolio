import React from "react"
import { Routes, Route } from "react-router-dom";
import { Contact, Contributions, Home, Projects, Skills } from "./pages";
import Layout from "./components/Layout";

const App:React.FC = () => {
  return <div className="bg-zinc-900 min-h-screen text-white">
    <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="skills" element={<Skills/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="contributions" element={<Contributions/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
    </Routes>
  </div>
}

export default App;