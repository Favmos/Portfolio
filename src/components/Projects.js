import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Home from "../assets/img/Home.jpg";
import project1 from "../assets/img/Project1.jpg";
import project2 from "../assets/img/Project2.jpg";
import melekatIND from "../assets/img/MelekatIND.png";
import DAB from "../assets/img/DAB.png";
import exploreit from "../assets/img/ExploreIT.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "UI/UX Design",
      description: "User Interface Web MELEKATIND",
      imgUrl: Home,
      link: "https://www.figma.com/design/q3SpykE0vPru0RCfNQGa7h/JAHITIND?node-id=1-2&t=a6kczsqd1ztewFRM-1", 
    },
    {
      title: "Data Science",
      description: "Credit Risk Prediction",
      imgUrl: project1,
      link: "https://github.com/Favmos/Data-Science_Fintech.git",
    },
    {
      title: "Artificial Intellegence",
      description: "Website Phising Detection",
      imgUrl: project2,
      link: "https://github.com/Favmos/Tugas-Akhir.git",
    },
    {
      title: "Business Startup",
      description: "Prototype Bisnis MelekatInd",
      imgUrl: melekatIND,
      link: "https://drive.google.com/drive/folders/1HfcZEi7f7q3hXvDlBLO7XUYA_opmn0U9?usp=sharing",
    },
    {
      title: "Data Analyst Business",
      description: "Prediksi Pembatalan Pemesanan Pelanggan dalam Perusahaan Pemesanan Perjalanan Online",
      imgUrl: DAB,
      link: "https://drive.google.com/drive/folders/1ELbKEJnn2IAT6PSHOcMR3nqE7T0cPris?usp=sharing",
    },
    {
      title: "Exploreit",
      description: "Aplikasi Exploreit",
      imgUrl: exploreit,
      link: "https://www.figma.com/design/SYmdM8sTt9qYu1sVkMIlxv/UI-ExploreIt?node-id=0-1&t=g6ZD59igqXmsyt9O-1",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have worked on various projects in the field of Informatics Engineering, ranging from web application development to data analysis. Each project presented unique challenges that honed my technical skills and deepened my understanding of technology. My experience includes creating efficient web-based systems, implementing machine learning models for pattern recognition, and developing Python-based applications utilizing the Flask framework. These projects not only strengthened my programming abilities but also taught me the importance of teamwork and time management.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
