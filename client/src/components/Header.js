//import { Container, Box, Heading, Card, Text } from 'gestalt';
//import { Container, Row, Col } from 'reactstrap';
//import { Link } from 'react-router-dom';
//import Loader from './Loader';
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu } from 'reactstrap';
import './App.css';
//import 'gestalt/dist/gestalt.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Strapi from 'strapi-sdk-javascript/build/main';
const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

class HeaderApp extends Component {
  state = {
    headers: []
  }
  async componentDidMount(){
    try{
      const response = await strapi.request('POST', '/graphql',{
        data:{
          query: `query{
            headers{
              id
              ambercreativelogo{
                url
              }
              menu
            }
          }`
        }
      });
      //console.log(response);
      this.setState({ headers: response.data.headers });
    } catch (err){
      console.error(err);
    }
  }

  render() {
    const { headers } = this.state; {/* use to retrieve the data on the frontpage */}

    return (
        <div>
            {headers.map(header =>(
                <div>
                    <Container id="header">
                        <Row key={header.id}>
                            <Col md="3" id="logo">
                                <a href="/"><img src={`${apiUrl}${header.ambercreativelogo.url}`} alt="Ambercreative Logo" className="img-fluid"  /></a>
                            </Col>
                            <Col md="9">
                                <Navbar light expand="md">
                                    <NavbarToggler onClick={this.toggle} />
                                    <Collapse isOpen={this.state.isOpen} navbar>
                                        <Nav className="ml-auto" navbar>
                                        <UncontrolledDropdown nav inNavbar>
                                            <DropdownToggle nav caret>Who We Are</DropdownToggle>
                                            <DropdownMenu right>
                                                <NavItem><NavLink href="/aboutus">Our Team</NavLink></NavItem>
                                                <NavItem><NavLink href="/ourclients">Our Clients</NavLink></NavItem>
                                                <NavItem><NavLink href="/aboutus">Career</NavLink></NavItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        <UncontrolledDropdown nav inNavbar>
                                            <DropdownToggle nav caret>What We Do</DropdownToggle>
                                            <DropdownMenu right>
                                                <NavItem><NavLink href="/facebook-marketing">Facebook Marketing</NavLink></NavItem>
                                                <NavItem><NavLink href="/linkedin-marketing">Linkedin Marketing</NavLink></NavItem>
                                                <NavItem><NavLink href="/google-adwords">Google Adwords</NavLink></NavItem>
                                                <NavItem><NavLink href="/instagramm-arketing">Instagram Marketing</NavLink></NavItem>
                                                <NavItem><NavLink href="/digital-marketing">Digital Marketing</NavLink></NavItem>
                                                <NavItem><NavLink href="/web-design-development">Web Design &amp; Development</NavLink></NavItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        <NavItem><NavLink href="/portfolio">Portfolio</NavLink></NavItem>
                                        <UncontrolledDropdown nav inNavbar>
                                            <DropdownToggle nav caret>Case Studies</DropdownToggle>
                                            <DropdownMenu right>
                                                <NavItem><NavLink href="/case-study-fresver-beauty-digital-marketing">Case Study: Fresver Beauty Digital Marketing</NavLink></NavItem>
                                                <NavItem><NavLink href="/case-study-lcms-traders-digital-marketing">Case Study: LCMS Traders Digital Marketing</NavLink></NavItem>
                                                <NavItem><NavLink href="/case-study-kritika-digital-marketing">Case Study: Kritika Digital Marketing</NavLink></NavItem>
                                                <NavItem><NavLink href="/case-study-hitcheed-digital-marketing">Case Study: Hitcheed Digital Marketing</NavLink></NavItem>
                                                <NavItem><NavLink href="/case-study-ipaymy-digital-marketing">Case Study: iPaymy Digital Marketing</NavLink></NavItem>
                                                <NavItem><NavLink href="/case-study-glovida-digital-marketing">Case Study: Glovida.com Digital Marketing</NavLink></NavItem>
                                                <NavItem><NavLink href="/case-study-iglobal-digital-marketing">Case Study: i-Global Digital Marketing</NavLink></NavItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        <NavItem><NavLink href="/blog">Blog</NavLink></NavItem>
                                        <NavItem><NavLink href="/contactus">Contact Us</NavLink></NavItem>
                                        </Nav>
                                    </Collapse>
                                </Navbar>
                            </Col>
                        </Row>
                    </Container>
                </div>
            ))}
        </div>
    );
  }
}

export default HeaderApp;
