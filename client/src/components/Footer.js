import React, { Component } from 'react';
import {Container, Row, Col, Media, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Strapi from 'strapi-sdk-javascript/build/main';
const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

class FooterApp extends Component {
  state = {
    footerbottoms: []
  }
  async componentDidMount(){
    try{
      const response = await strapi.request('POST', '/graphql',{
        data:{
          query: `query{
            footerbottoms{
              id
              footerlogo{
                url
              }
              footergooglepartner{
                url
              }
              footermenu1
              footermenu2
              footermenu3
              footercopyright
            }
          }`
        }
      });
      //console.log(response);
      this.setState({ footerbottoms: response.data.footerbottoms });
    } catch (err){
      console.error(err);
    }
  }

  render() {
    const { footerbottoms } = this.state; 

    return (
      <div>
        {footerbottoms.map(footerbottom =>(
          <div>
            <Container id="footercont">
              <Row key={footerbottom.id}>
                  <Col md="3">
                      <Media>
                          <img src={`${apiUrl}${footerbottom.footerlogo.url}`} alt="Ambercreative" className="img-fluid"  />
                      </Media>
                  </Col>
                  <Col md="3">
                      <Nav vertical>
                          <NavItem><NavLink href="#">Facebook Marketing</NavLink></NavItem>
                          <NavItem><NavLink href="#">Google Adwords</NavLink></NavItem>
                          <NavItem><NavLink href="#">Linkedin Marketing</NavLink></NavItem>
                          <NavItem><NavLink href="#">Instagram Marketing</NavLink></NavItem>
                          <NavItem><NavLink href="#">Digital Marketing Services</NavLink></NavItem>
                          <NavItem><NavLink href="#">Web Design &amp; Development</NavLink></NavItem>
                      </Nav>
                  </Col>
                  <Col md="3">
                      <Nav vertical>
                          <NavItem><NavLink href="#">Case Studies</NavLink></NavItem>
                          <NavItem><NavLink href="#">Portfolio</NavLink></NavItem>
                          <NavItem><NavLink href="#">Career</NavLink></NavItem>
                          <NavItem><NavLink href="#">Our Team</NavLink></NavItem>
                          <NavItem><NavLink href="#">Our Clients</NavLink></NavItem>
                      </Nav>
                  </Col>
              </Row>
            </Container>
            <Container fluid id="footerbott">
              <Row>
                <Container>
                  <Row><Col>{footerbottom.footercopyright}</Col></Row>
                </Container>
              </Row>
            </Container>
          </div>
      ))}
    </div>
    );
  }
}

export default FooterApp;
