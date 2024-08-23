import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import dataAnalyst from "../assets/img/Data Analyst.jpg";
import dataScience from "../assets/img/Data Science.jpg";
import webDevelopment from "../assets/img/Web Development.jpg";
import artificiallIntellegence from "../assets/img/Artificiall Intellegence.jpg";
import businessDevelopment from "../assets/img/Bussiness Development.jpg";
import eCommerce from "../assets/img/Ecommerce.jpg";
import UIUX from "../assets/img/UI UX.jpg";

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
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p><strong>Soft Skills:</strong> Digital Mindset, Presentation Skills, Team Work, Analytical Thinking, Problem Solving, Leadership,
                        Communication Skills, Independent Learning Ability </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={webDevelopment} alt="Web Development" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                            <img src={dataScience} alt="Data Analyst" />
                                <h5>Data Science</h5>
                            </div>
                            <div className="item">
                            <img src={dataAnalyst} alt="Data Analyst" />
                                <h5>Data Analyst</h5>
                            </div>
                            <div className="item">
                                <img src={artificiallIntellegence} alt="Artificiall Intellegence" />
                                <h5>Artificial Intellegence Engineer</h5>
                            </div>
                            <div className="item">
                                <img src={businessDevelopment} alt="Business Development" />
                                <h5>Business Development</h5>
                            </div>
                            <div className="item">
                                <img src={eCommerce} alt="E-Commerce :Start Up, Scale Up, & Smart U" />
                                <h5>E-Commerce :Start Up, Scale Up, & Smart Up</h5>
                            </div>
                            <div className="item">
                                <img src={UIUX} alt="UI/UX Design" />
                                <h5>UI/UX Design</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}
