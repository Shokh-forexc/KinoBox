import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./Components/Layout/Layout"
import { Menu } from "./Components/Menu/Menu"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Menu/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
