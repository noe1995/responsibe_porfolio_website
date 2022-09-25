import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logo from "../assets/img/logo.svg";

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="icon"/></a>
                            <a href="#"><img src={navIcon2} alt="icon"/></a>
                            <a href="#"><img src={navIcon3} alt="icon"/></a>
                        </div>
                        <p>Copyrigth 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}