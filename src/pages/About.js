import React, {Component} from 'react';
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="lef-tab-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img src="https://liip.rokka.io/www_inarticle_4/36f3d0/prototype.jpg" alt=""/>
                                    <p>
                                        Абзац 1
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://uploads-ssl.webflow.com/5eaa7577bc49cd8b876e35b1/5edb404be93ebb33eb3d7182_1*0Se1qa8bKIHTY-uD8fv9KQ.png" alt=""/>
                                    <p>
                                        Абзац 2
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://uploads-ssl.webflow.com/5eaa7577bc49cd8b876e35b1/5edb404be93ebb33eb3d7182_1*0Se1qa8bKIHTY-uD8fv9KQ.png" alt=""/>
                                    <p>
                                        Абзац 3
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://uploads-ssl.webflow.com/5eaa7577bc49cd8b876e35b1/5edb404be93ebb33eb3d7182_1*0Se1qa8bKIHTY-uD8fv9KQ.png" alt=""/>
                                    <p>
                                        Абзац 4
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://uploads-ssl.webflow.com/5eaa7577bc49cd8b876e35b1/5edb404be93ebb33eb3d7182_1*0Se1qa8bKIHTY-uD8fv9KQ.png" alt=""/>
                                    <p>
                                        Абзац 5
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;