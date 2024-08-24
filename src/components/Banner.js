import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../assets/img/foto-ijazah.jpg"; // Pastikan jalur gambar benar
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const toRotate = useMemo(() => ["Artificial Intelligence", "Business Development", "UI/UX Designer"], []);

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [loopNum, isDeleting, text, delta, toRotate]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn text-center" : "text-center"}>
                  <img 
                    src={profileImg} 
                    alt="Profile Img" 
                    style={{ 
                      borderRadius: '50%', 
                      marginBottom: '20px', 
                      width: '200px', // Ukuran diperbesar
                      height: '200px' // Ukuran diperbesar
                    }} 
                  />
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Abdul Rezak`} <span className="txt-rotate" dataPeriod="1000" data-rotate='["Artificial Intelligence", "Business Development", "UI/UX Designer"]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a fresh graduate student from the Informatics Engineering study program with a strong background in
                    programming, data analysis. I have honed my technical and analytical skills through various academic and research
                    projects, through my lectures, and my internship experience. I am a Data and Artificial Intelligence Enthusiast.
                    Currently, I am looking for an internship program to further develop and utilize my skills specifically in the field of
                    Data or Artificial Intelligence.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
