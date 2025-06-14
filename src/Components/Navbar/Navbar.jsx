import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../Menu/Logo.png";

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchData = [
    "Films",
    "Serials",
    "TvShows",
    "Cartoons",
    "Football",
    "News"
  ];

  const filteredResults = searchData.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="navbar">
            <nav>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="textdiv">
                <p>Home</p>
                <p>New</p>
                <p>Genres</p>
                <p>Contact</p>
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <span class="input-group-text" id="basic-addon2"><i className="bi bi-search"></i></span>
            </div>
        </nav>
        <nav className="media-navbar">
            <button style={{marginLeft:'5%'}} class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="bi bi-list"></i></button>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <button style={{marginLeft:'10%'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><i className="bi bi-search"></i></button>
            <i style={{color:'#fff',fontSize:'30px', marginLeft:'5%'}} className="bi bi-three-dots"></i>
        </nav>

        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" style={{width:'80%',backgroundColor:'black'}}>
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                    <img src={Logo} alt="" />
                </h5>
                <button style={{color:'#fff'}} type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <button className="categories">Films</button>
                <button className="categories">Serials</button>
                <button className="categories">TvShows</button>
                <button className="categories">Cartoons</button>
                <button className="categories">Football</button>
                <button className="categories">News</button>
            </div>
        </div>    

      <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel" style={{ height: "60vh", backgroundColor: "black" }}>
        <div className="offcanvas-header">
          <div className="input-group mb-3">
            <input
              style={{
                height: "7vh",
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
                zIndex:'5'
              }}
              type="text"
              className="form-control"
              placeholder="Search media"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <span
              style={{
                width: "15%",
                alignItems: "center",
                fontSize: "20px",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
                zIndex:'999'
              }}
              className="input-group-text"
              id="basic-addon2"
            >
              <i className="bi bi-search"></i>
            </span>
          </div>
        </div>
        <div className="offcanvas-body">
          {searchTerm === "" ? (
            <p className="text-center text-secondary">No recent searches</p>
          ) : filteredResults.length > 0 ? (
            <ul className="list-group">
              {filteredResults.map((item, index) => (
                <li key={index} className="list-group-item bg-dark text-white">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-secondary">No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};
