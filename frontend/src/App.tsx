import React from "react"
import { Routes, Route } from "react-router-dom";
import { Contact, Contributions, Home, NotFound, Projects, Skills } from "./pages";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App:React.FC = () => {
  return <div className="bg-zinc-900 min-h-screen text-white">

    <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="dark"
    />

    <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="skills" element={<Skills/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="contributions" element={<Contributions/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
    </Routes>
  </div>
}

export default App;