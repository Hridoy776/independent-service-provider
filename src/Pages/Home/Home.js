import React from "react";
import { Carousel, Row } from "react-bootstrap";
import useServices from "../../useServices";
import Services from "./Services/Services";
import banner1 from "../../images/banner/banner1.jpg";
import banner2 from "../../images/banner/banner2.jpg";
import banner3 from "../../images/banner/banner3.jpg";
const Home = () => {
  const [services] = useServices();
  return (
    <main>
      <section className="container">
      <Carousel className="silder" variant="dark">
          <Carousel.Item>
            <img
              className="d-block h-75 w-100"
              src={banner1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="container">
        <h1>services</h1>
        <Row>
          {services.map((service) => (
            <Services key={service.id} service={service}></Services>
          ))}
        </Row>
      </section>
    </main>
  );
};

export default Home;
