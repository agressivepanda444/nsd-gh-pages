import React from "react";
import "./style.css";
import Typewriter from "typewriter-effect";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  worktimeline2,
  introdata,
  mission,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">ABOUT US</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme1}</p>
              <p>{dataabout.aboutme2}</p>
              <p>{dataabout.aboutme3}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
        <Col lg="5">
            <h3 className="color_sec py-4">{mission.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{mission.motivation}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{introdata.title}</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <Typewriter
                      options={{
                        strings: [
                          introdata.animated.first,
                          introdata.animated.second,
                          introdata.animated.third,
                          introdata.animated.fourth,
                          introdata.animated.fifth,
                          introdata.animated.sixth,
                          introdata.animated.seventh,
                          introdata.animated.eight,
                          introdata.animated.ninth,
                          introdata.animated.tenth,
                          introdata.animated.eleventh,
                          introdata.animated.twelveth,
                          introdata.animated.thirteenth,
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: -2,
                        delay: -10,
                        cursor: "",
                      }}
                    />
            </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">UPCOMING EVENTS</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline2.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">PAST EVENTS</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
