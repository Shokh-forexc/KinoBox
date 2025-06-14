import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiMoviePlay } from "react-icons/bi";
import Chegirma from '../Menu/Chegirma.png'
import "./Menu.css"

const responsive = {
    dekstop: {
        breakpoint: {max: 3000,min : 1024},
        items: 4,
        slideToSlide: 1,
    },
    tablet: {
        breakpoint: {max: 1024, min: 768},
        items: 2,
        slideToSlide: 1,
    },
    mobile: {
        breakpoint: {max: 768, min: 464},
        items: 1,
        slideToSlide: 1,
    }
}

const sliderImageUrl = [
    {
        url: "https://upload.wikimedia.org/wikipedia/uz/d/d9/Sport_TV_logotipi.jpg"
    },
    {
        url: "https://tvinfo.uz//uploads/1587415159.webp"
    },
    {
        url: "https://i.allplay.uz/i/32675/eyJ3IjoyNTAsImgiOjI1MCwiYyI6dHJ1ZX0/image.jpg?t=xSjYkFdbqM0-zwsi8MC-2A"
    },
    {
        url: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032020/russia-1.png?4KaRNz9wGb_lfp4kzHOX6PAc90nJEaGk&itok=bjTzcjEG"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7nY0_0x61_Hd-r3Pv6VANvT89Jzt9HqIDuGHBm1Idx9i0-GI1qETcAl0GSNDIqW6E9f4&usqp=CAU"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMqL7vfcOv5tQzfuOUG1wvhSdDRGQ1-veJzVEhjj1sIg&s&ec=72940543"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnR0MHjd2g77sXoDU2FW4DLFp-lP4E2_xcYQL3wrrfPQ&s&ec=72940543"
    },
    {
        url: "https://api.logobank.uz/media/logos_png/My5-01.png"
    },
    {
        url: "https://api.logobank.uz/media/logos_png/Sevimli-01.png"
    },
    {
        url: "https://upload.wikimedia.org/wikipedia/uz/e/ea/Uzreport_TV_logo.jpg"
    },
    {
        url: "https://marketing.uz/brend-goda-2022/uploads/works/covers/a5b52e6fa5f420ab0c4bcaab8e07eda7.jpg"
    },
    {
        url: "https://tvinfo.uz//uploads/1668770498.webp"
    },
]
const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3',
  },
];
const Movie = [
    {
        id: '1',
        img:'https://lh6.googleusercontent.com/proxy/ajZjRBgT9XU1TEDSudvB5Ss74ZnqD7J0T7ElQ0WEK5oRzvkQNc5rR5zMftJPMGFQ9CVDZ4dYEzPaeRe7kypxdWaoBqMFjJ_MzFVTfiJjEYadAI6NzpgWgB3IR4jMh9G4lhIau7ibaRKdWKnecsKn_oNfqmID',
        text:'Jon Wick 4',
        data: '2023',
        rate: '8.1',
        price: '0.92 $'
    },
    {
        id: '2',
        img:"https://m.media-amazon.com/images/M/MV5BMTQzMzQxNDU2Nl5BMl5BanBnXkFtZTgwODI3NjUzMzE@._V1_.jpg",
        text: 'The Pyramid',
        data: '2021',
        rate: '6.7',
        price: '0.52 $'
    },
    {
        id: '3',
        img: "https://upload.wikimedia.org/wikipedia/en/0/00/Fast_%26_Furious_Presents_Hobbs_%26_Shaw_-_theatrical_poster.jpg",
        text: 'Hobbs and Shaw',
        data: '2019',
        rate: '6.5',
        price: '1.02 $'
    },
    {
        id: '4',
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI8nsJndWjUaDgBxNBKW8cl4ng5SblKLuc-lQzWdxoq8ZtFoEX3ixo7CENnmi9iX6X1mw&usqp=CAU",
        text:"Harry Potter",
        data: "2011",
        rate: '8.1',
        price: '1.73 $'
    },
    {
        id: '5',
        img:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgUaa0Ccb0YYetAHq371A0ZI1Uh7lE1ZvFDt2Q6UenpTZhSV5TpLhBDfhapXYQFKVY9sqbTBM68czMAl2dMa-vJ819us5_kYMJ2TZt1I4_2A',
        text: 'Avengers',
        data: '2018',
        rate: '8.4',
        price: '1.68 $'
    },
    {
        id: '6',
        img:'https://musicart.xboxlive.com/7/e8a15100-0000-0000-0000-000000000002/504/image.jpg',
        text: 'Justice League',
        data: '2021',
        rate: '7.9',
        price: '0.96 $'
    },
    {
        id: '7',
        img: 'https://m.media-amazon.com/images/M/MV5BN2FmZGVlNTgtYTllNC00YmUzLTk5YmUtNWNhMzk3ZmE2NmQ0XkEyXkFqcGc@._V1_.jpg',
        text: 'Ghost Rider',
        data: '2007',
        rate: '5.3',
        price: '0.78$'
    },
    {
        id: '8',
        img:'https://i.pinimg.com/1200x/31/07/7d/31077d2260930eeae7bb2afaaae2f503.jpg',
        text: 'Sherlock Holmes',
        data: '2010',
        rate: '9',
        price: '2.28$'

    },
]

export const Menu = () =>{
    return(
        <div className="menu-container">
            <div className="venom">
                <div className="dark-overly">
                    <button><i className="bi bi-play-fill"></i></button>
                </div>
            </div>
            <div className="marketing">
                <div className="textdiv">
                    <h1>
                        Most Popular
                        Movies with <br />
                        Subscription</h1>
                        <div className="itemtextdiv">
                            <h5>33.000+<h5 style={{color:'#fff',marginLeft:'0%'}}>Cinema and Serials</h5></h5>
                            <h5>1.600+<h5 style={{color:'#fff',marginLeft:'0%'}}>TV Shows</h5></h5>
                            <h5>170+<h5 style={{color:'#fff',marginLeft:'0%'}}>Cartoons</h5></h5>
                            <h5>1200+<h5 style={{color:'#fff',marginLeft:'0%'}}>Short VD</h5></h5>
                        </div>
                </div>
                <img src={Chegirma} alt="" />
                <button>1.9$</button>
            </div>
            <h2 style={{fontSize:'40px',fontWeight:'bold'}}>Online TV <i className="bi bi-chevron-right"></i></h2>
            <div className="tv">
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    infinite={true}
                    partialVisible={false}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding"
                    customRightArrow={<button className="carousel-button carousel-button-right"><i className="bi bi-chevron-right"></i></button>}
                    customLeftArrow={<button className="carousel-button carousel-button-left"><i className="bi bi-chevron-left"></i></button>}
                >
                    {sliderImageUrl.map((imageUrl, index) => {
                        return (
                            <div className="slider" key={index}>
                                {imageUrl.url ? (
                                    <img src={imageUrl.url} alt="TV" />
                                ) : (
                                    <div style={{
                                        width: "100%",
                                        height: "150px",
                                        backgroundColor: "#222",
                                        color: "#fff",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "10px"
                                    }}>
                                        No Image
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </Carousel>
            </div>
            <h2 style={{fontWeight:'bold',fontSize:'35px'}}>Opening this week <i className="bi bi-chevron-right"></i></h2>
            <div className="cards"> 
                {Movie.map(item=>{
                    return(
                        <div className="fourcard" key={item.id}>
                            <img src={item.img} alt="" />
                            <div className="dark-overly">
                                <button style={{
                                    width:'30%',
                                    height:'5vh',
                                    position:'absolute',
                                    right:'0',
                                    border:'none',
                                    borderBottomLeftRadius:'10px',
                                    borderTopLeftRadius:'10px',
                                    top:'5%',
                                    fontSize:'20px',
                                    fontWeight:'bold',
                                    backgroundColor:'green',
                                    color:"#fff",
                                    }} className="addition">{item.price}</button>
                                <h2>{item.text}</h2>
                                <div className="flexbox">
                                    <h3><i class="bi bi-calendar-week"></i> {item.data}</h3>
                                    <h3><i className="bi bi-star-fill"></i> {item.rate}</h3>
                                </div>
                                <button className="view">View</button>
                            </div>
                        </div>
                    )
                })}
            </div>
                    <div className="twiceabout">
                    <div className="aboutfilm">
                        <h3>The Crow</h3>
                        <h5>The Crow is a 1994 American gothic action film  directed by Alex Proyas, based <br />
                         on the comic book series by James O'Barr. The story follows Eric Draven, a man <br />
                          who is resurrected from the dead to avenge his fiancée's brutal murder. As he <br />
                           seeks vengeance against the criminals responsible, he is guided by a mystical <br />
                            crow that symbolizes his return to life. The film is known for its dark, atmospheric <br />
                             style and tragic production, particularly due to the death of lead actor Brandon <br />
                         Lee during filming. The Crow has become a cult classic, known for its themes of love.</h5>
                         <div className="country">
                            <h3>Country :</h3>
                            <h3>USA and UK</h3>
                         </div>
                         <div className="about">
                            <h3>Rating</h3>
                            <h3><img style={{width:'10%',marginLeft:'70%'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1280px-IMDB_Logo_2016.svg.png" alt="" /> 4.7 <BiMoviePlay />7.8</h3>
                         </div>
                         <div style={{borderBottom:'3px solid black'}} className="about">
                            <h3>Genres</h3>
                            <h3>
                                <button style={{
                                    fontSize:'13px',
                                    borderRadius:'5px',
                                    height:'4vh',
                                    color:'red',
                                    backgroundColor:'black',
                                    border:'none',
                                    marginLeft:'2%',
                                    width:'45%'
                                   }}>Dramma</button>
                                <button style={{
                                    fontSize:'13px',
                                    borderRadius:'5px',
                                    height:'4vh',
                                    color:'red',
                                    backgroundColor:'black',
                                    border:'none',
                                    marginLeft:'2%',
                                    width:'45%'
                                   }}>Fantastic</button>
                                <button style={{
                                    fontSize:'13px',
                                    borderRadius:'5px',
                                    height:'4vh',
                                    color:'red',
                                    backgroundColor:'black',
                                    border:'none',
                                    marginLeft:'2%',
                                    width:'45%'
                                   }}>Millitant</button>
                            </h3>
                         </div>
                         <div style={{border:'none'}} className="country length">
                            <h3>Length of cinema :</h3>
                            <h3>1h 50min</h3>
                         </div>
                    </div>
                    <div className="imgfilm">
                        <div className="dark-overly">
                        <img src="https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/20743982-3508439.jpg" alt="" />
                        </div>
                    </div>
                    </div>
            {/* <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://cdn.theplaylist.net/wp-content/uploads/2023/05/08064650/Oppenheimer-Christopher-Nolan.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>OppenHeimer</h5>
                            <button style={{
                                width:"20%",
                                height:'5vh',
                                borderRadius:'20px',
                                border:'none',
                                color:'red',
                                fontSize:'large',
                                fontWeight:'bold'
                                }}>Buy for 5.35$</button>
                        </div>
                    </div>
                <div class="carousel-item">
                    <img src="https://s2.dmcdn.net/v/UF8vl1d5-6X7UQjXD/x480" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Countdown 2</h5>
                        <button style={{
                                width:"20%",
                                height:'5vh',
                                borderRadius:'20px',
                                border:'none',
                                color:'red',
                                fontSize:'large',
                                fontWeight:'bold'
                                }}>Buy for 2.35$</button>                    
                        </div>
                </div>
                <div class="carousel-item">
                    <img src="https://upload.wikimedia.org/wikipedia/en/e/e6/Mega_Man_Fully_Charged_%28Title_Card%29.png" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>MegaMan : Full Charged</h5>
                        <button style={{
                                width:"20%",
                                height:'5vh',
                                borderRadius:'20px',
                                border:'none',
                                color:'red',
                                fontSize:'large',
                                fontWeight:'bold'
                                }}>Buy for 7.35$</button>                   
                        </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div> */}
        </div>
    )
};
