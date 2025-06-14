import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./Components/Layout/Layout"
import { Menu } from "./Components/Menu/Menu"
import {Genres} from "./Components/Genres/Genres.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
             <Route index element={<Menu/>}/>
             <Route path="/genres" element={<Genres/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
