import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/csharp_x.png";
import projImg2 from "../assets/img/uml_x.jpg";
import projImg3 from "../assets/img/mysql_x.png";
import projImg4 from "../assets/img/web_x.png";
import projImg5 from "../assets/img/react_x.png";
import projImg6 from "../assets/img/nodejs.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
//import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const programacion = [
    {
      title: "C#",
      description: "Curso intensivo programación orientada a objetos",
      imgUrl: projImg1,
    },
    {
      title: "UML",
      description: "Diagramación con el Lenguaje Unificado de Modelado",
      imgUrl: projImg2,
    },
    {
      title: "MySQL",
      description: "Bases de datos con MySQL",
      imgUrl: projImg3,
    },
    {
      title: "HTML, CSS, JS",
      description: "Diseño y desarrollo web",
      imgUrl: projImg4,
    },
    {
      title: "ReactJS",
      description: "Desarrollo de aplicaciones web Frontend",
      imgUrl: projImg5,
    },
    {
      title: "NodeJS",
      description: "Desarrollo de aplicaciones web Backend",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Cursos</h2>
                <p>Accede a nuestros cursos gratuitos. Dedicados al aprendizaje de cada uno de los usuarios, con lo último de las nuevas tecnologías y software, a disposición de todo el mundo
                    de manera gratuita.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Programación</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Data Science</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Economia</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="four">Tutoriales</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          programacion.map((programacion, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...programacion}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        <p>Proximamente...</p>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        <p>Proximamente...</p>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="four">
                      <Row>
                        <p>Proximamente...</p>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}