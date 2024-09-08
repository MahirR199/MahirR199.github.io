import { Col, Row } from "react-bootstrap"

export const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: progImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: progImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: progImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: progImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: progImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: progImg3,
        },
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Hi my name mahir and this about projects</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}