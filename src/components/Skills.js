import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import circle from "../assets/img/circle.svg";
import purple from "../assets/img/purple.svg";

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
                                    <img src={purple} alt="Image" />
                                    <h5>Linux/Unix</h5>
                                </div>
                                <div className="item">
                                    <img src={purple} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={purple} alt="Image" />
                                    <h5>Rust</h5>
                                </div>
                                <div className="item">
                                    <img src={purple} alt="Image" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={purple} alt="Image" />
                                    <h5>Elixir</h5>
                                </div>
                                <div className="item">
                                    <img src={purple} alt="Image" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={purple} alt="Image" />
                                    <h5>C/C#/C++</h5>
                                </div>
                                <div className="item">
                                    <img src={purple} alt="Image" />
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={purple} alt="Image" />
                                    <h5>HTML/CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={purple} alt="Image" />
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