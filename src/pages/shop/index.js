import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  shop,
  meta,
  worktimeline,
  skills,
  services,
  mission,
} from "../../content_option";

export const Shop = () => {
  return (
    <HelmetProvider>
      <Container className="Shop-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Shop | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">SHOP</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{shop.forgive}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p>{shop.content}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
