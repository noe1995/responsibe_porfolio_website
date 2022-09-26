import meter1 from "../assets/img/academy.png";
import meter2 from "../assets/img/react.png";
import meter3 from "../assets/img/market.png";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
//import arrow1 from "../assets/img/arrow1.svg";
//import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            //the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items:5
        },
        desktop:{
            breakpoint: {max: 3000, min: 1024},
            items:3
        },
        tablet:{
            breakpoint: {max: 1024, min: 464},
            items:2
        },
        mobile:{
            breakpoint: {max: 464, min: 0},
            items:1
        }
    };

    return(
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Proyectos</h2>
                            <p>Conoce todos los proyectos que CodeGame tiene actualmente.<br/>El limite del conocimiento lo pones tu mismo.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="i-skills" id="i-skills"/>
                                    <h5>CodeGame Academy</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="i-skills" id="i-skills"/>
                                    <h5>Works in React</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="skills"/>
                                    <h5>Market Tracker</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image"/>
        </section>
    )
}