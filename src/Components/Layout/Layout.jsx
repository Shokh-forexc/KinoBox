import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar/Navbar"
import { Footer } from "../Footer/Footer"
import './Layout.css'
export const Layout = () =>{
    return(
        <>
            <div style={{backgroundColor:'black'}}>
            <Navbar/>
            <Outlet/>
            <Footer/>
            </div>
        </>
    )
}