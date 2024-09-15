import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/applemusic.jpg";
import projImg2 from "../assets/img/houseprice.jpg";
import projImg3 from "../assets/img/hobowiz.jpg";
import projImg4 from "../assets/img/portfolio.jpg";
import projImg5 from "../assets/img/checkers.png";
import projImg6 from "../assets/img/spicy.jpg";

import 'animate.css';
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Projects = () => {

    const projects = [
        {
            title: "Apple Music App",
            description: "Java",
            imgUrl: projImg1,
            link: "https://github.com/MahirR199/Apple-Music-Application"
        },
        {
            title: "Home Price Predictor",
            description: "Python",
            imgUrl: projImg2,
            link: "https://github.com/MahirR199/PredictHomePrice"
        },
        {
            title: "Hogwarts Hobo",
            description: "Python",
            imgUrl: projImg3,
            link: "https://github.com/MahirR199/HogwartsHobo"
        },
        {
            title: "Portfolio",
            description: "Javascript",
            imgUrl: projImg4,
            link: "https://github.com/MahirR199/portfolio"
        },
        {
            title: "Checkers",
            description: "Java",
            imgUrl: projImg5,
            link: "https://github.com/MahirR199/Checkers"
        },
        {
            title: "Spicy Restaurant",
            description: "C#",
            imgUrl: projImg6,
            link: "https://github.com/MahirR199/Spicy"
        },
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                            <h2>Projects</h2>
                            <p></p>
                            </div>}
                        </TrackVisibility>
                        <Tab.Container id= "projects-tab" defaultActiveKey="first">
                            {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav> */}
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((projects, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...projects}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Mahir</Tab.Pane>
                                <Tab.Pane eventKey="third">Rahman</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}