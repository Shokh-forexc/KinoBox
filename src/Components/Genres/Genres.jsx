import './Jenres.css'
import python from '../assets/python.png';
import react from '../assets/react.png';
import java from '../assets/java.png';
import htmlcss from '../assets/htmlcss.png';
import me from '../assets/my.png';
import Jigarm from '../assets/jgar.png';
export const Genres = () =>{
    const all = [
        {
            id: 1,
            name: "Dilbek Abdurahimov",
            codingtype: "Html kursi",
            img: htmlcss,
            category: "frontend"
        },
        {
            id: 2,
            name: "Shohjahon Shuhratov",
            codingtype: "TypeScript",
            img: "https://img.icons8.com/fluent/512/typescript.png",
            category: "frontend"
        },
        {
            id: 3,
            name: "Mirzohir Xamroqulov",
            codingtype: "React asoslari va kirish",
            img: react,
            category: "frontend"
        },
        {
            id: 4,
            name: "Mirzohid Xamorqulov",
            codingtype: "Javascript boshlang'ich",
            img: "https://img.icons8.com/ios11/512/228BE6/javascript.png",
            category: "frontend"
        },
        {
            id: 5,
            name: "Shohjahon Shuhratov",
            codingtype: "NextJs kursi",
            img: "https://img.icons8.com/fluent-systems-regular/512/228BE6/nextjs.png",
            category: "frontend"
        },
        {
            id: 6,
            name: "Dilbek Abdurahimov",
            codingtype: "Css kursi",
            img: htmlcss,
            category: "frontend"
        },
        {
            id: 7,
            name: "Mirzohid Xamroqulov",
            codingtype: "Back end -> Java",
            img: java,
            category: "backend"
        },
        {
            id: 8,
            name: "Shohjahon Shuhratov",
            codingtype: "Back end -> Python",
            img: python,
            category: "python"
        }
    ];
    const filteredItems = selected === "all"
        ? all
        : all.filter(item => {
            if (selected === "backend") return item.category === "backend";
            if (selected === "python") return item.category === "python";
            if (selected === "frontend") return item.category === "frontend";
            return true;
        });
    return(
        <div className="genres">
            <h1>Movies by Genre</h1>
            <div className="buttonselectdiv">
                <button onClick={() => handleButtonClick("all")}>Barchasi</button>
                <button onClick={() => handleButtonClick("frontend")}>Front end</button>
                <button onClick={() => handleButtonClick("backend")}>Back end</button>
                <button onClick={() => handleButtonClick("python")}>Python</button>
                <button onClick={() => handleButtonClick("kids")}>It Kids</button>
            </div>

            <div className="divamaliyotlar">
                {filteredItems.map((item) => (
                    <div key={item.id} className="amaliyot">
                        <h1>{item.codingtype}</h1>
                        <h3>{item.name}</h3>
                        <img
                            style={
                                [5, 2, 4].includes(item.id)
                                    ? { width: "60%", marginTop: "10%", marginLeft: "35%" }
                                    : {}
                            }
                            src={item.img}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}