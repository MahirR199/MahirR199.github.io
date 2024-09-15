import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import python from "../assets/img/python.svg";
import linux from "../assets/img/linux.svg";
import rust from "../assets/img/rust.svg";
import java from "../assets/img/java.svg";
import elixir from "../assets/img/elixir.svg";
import javascript from "../assets/img/javascript.svg";
import c from "../assets/img/c.svg";
import cpp from "../assets/img/cpp.svg";
import cs from "../assets/img/cs.svg";
import sql from "../assets/img/sql.svg";
import html from "../assets/img/HTML.svg";
import haskell from "../assets/img/haskell.svg";
import colorSharp from "../assets/img/color-sharp.png";
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Technical Skills
                            </h2>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={python} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={java} alt="Image" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={rust} alt="Image" />
                                    <h5>Rust</h5>
                                </div>
                                <div className="item">
                                    <img src={linux} alt="Image" />
                                    <h5>Linux/Unix</h5>
                                </div>
                                <div className="item">
                                    <img src={elixir} alt="Image" />
                                    <h5>Elixir</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="Image" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={c} alt="Image" />
                                    <h5>C</h5>
                                </div>
                                <div className="item">
                                    <img src={cpp} alt="Image" />
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <img src={cs} alt="Image" />
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <img src={sql} alt="Image" />
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="Image" />
                                    <h5>HTML/CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={haskell} alt="Image" />
                                    <h5>Haskell</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )
}