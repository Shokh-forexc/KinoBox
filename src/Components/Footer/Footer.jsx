import "./Footer.css"
import Logo from '../Menu/Logo.png'
export const Footer = () =>{
    return(
        <footer>
            <div className="footerimg">
                <img src={Logo} alt="" />
                <div className="buttondiv">
                    <button><i className="bi bi-google"></i></button>
                    <button><i className="bi bi-facebook"></i></button>
                    <button><i className="bi bi-globe"></i></button>
                    <button><i className="bi bi-instagram"></i></button>
                    <button><i className="bi bi-twitter"></i></button>
                </div>
            </div>
            <div className="categories">
                <h3>Movies Caregories</h3>
                <h5>Action</h5>
                <h5>Adventure</h5>
                <h5>Animation</h5>
                <h5>Comedy</h5>
                <h5>Crime</h5>
            </div>
            <div className="categories">
                <h5>Drama</h5>
                <h5>Fantasy</h5>
                <h5>Horror</h5>
                <h5>Mystrey</h5>
                <h5>Romance</h5>
            </div>
            <div className="categories">
                <h3>TV Series</h3>
                <h5>Valentine Day</h5>
                <h5>Underrated Comedies</h5>
                <h5>Scary TV Series</h5>
                <h5>Best 2020 documentaries</h5>
                <h5>Classic Shows</h5>
            </div>
            <div className="categories">
                <h5>Big TV Premieres</h5>
                <h5>Reality TV Shows</h5>
                <h5>Original Shows</h5>
                <h5>Suprise of the Year Shows</h5>
            </div>
        </footer>
    )
}