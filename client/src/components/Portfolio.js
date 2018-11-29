//import { Container, Box, Heading, Card, Text } from 'gestalt';
//import { Container, Row, Col } from 'reactstrap';
//import { Link } from 'react-router-dom';
//import Loader from './Loader';
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
//import './App.css';
//import 'gestalt/dist/gestalt.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Strapi from 'strapi-sdk-javascript/build/main';
const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

class PortfoliosApp extends Component {
  state = {
    portfolios: []
  }
  async componentDidMount(){
    try{
      const response = await strapi.request('POST', '/graphql',{
        data:{
          query: `query{
            portfolios{
              id
              brand
              servicerendered
              portfolioimage{
                url
              }
            }
          }`
        }
      });
      //console.log(response);
      this.setState({ portfolios: response.data.portfolios });
    } catch (err){
      console.error(err);
    }
  }

  render() {
    const { portfolios } = this.state; {/* use to retrieve the data on the frontpage */}

    return (
      <div>
          <Container id="portfoliotitleid">
            <Row>
              <Col>
                <h2 className="pageTitle">Our Portfolios</h2>
                <div className="divider"></div>
              </Col>
            </Row>
            <Row>
                <Col className="" id="portfolioid">
                    {/* use to display all the array content under frontpages using the map method (frontpages.map) */}
                    {/* need to use the key (frontpage.id) to have a unique identifer in retreiving the data */}
                    {portfolios.map(portfolio =>(
                        <div className="" key={portfolio.id}>
                            {/*<img src={`${apiUrl}${frontpage.homeslider.url}`} class="img-fluid" />*/}
                            <div>
                                <a href="/"><h1>{portfolio.brand}<br /><span>{portfolio.servicerendered}</span></h1></a>
                            </div>
                            <img src={`${apiUrl}${portfolio.portfolioimage.url}`} alt={'portfolio.name'} className="img-fluid"  />
                        </div>
                    ))}
                  </Col>
              </Row>
            </Container>
      </div>
    );
  }
}

export default PortfoliosApp;
