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

class OurClientsApp extends Component {
  state = {
    ourclients: []
  }
  async componentDidMount(){
    try{
      const response = await strapi.request('POST', '/graphql',{
        data:{
          query: `query{
            ourclients{
              id
              image{
               url 
              }
            }
          }`
        }
      });
      //console.log(response);
      this.setState({ ourclients: response.data.ourclients });
    } catch (err){
      console.error(err);
    }
  }

  render() {
    const { ourclients } = this.state; {/* use to retrieve the data on the frontpage */}

    return (
      <div>
          <Container id="ourclientid">
            <Row>
              <Col>
                <h2 className="pageTitle">Our Clients</h2>
                <div className="divider"></div>
              </Col>
            </Row>
            <Row id="clientLogos">
                {/* use to display all the array content under frontpages using the map method (frontpages.map) */}
                {/* need to use the key (frontpage.id) to have a unique identifer in retreiving the data */}
                  {ourclients.map(ourclient =>(
                    <Col key={ourclient.id} md="3">
                        {/*<img src={`${apiUrl}${frontpage.homeslider.url}`} class="img-fluid" />*/}
                        <img src={`${apiUrl}${ourclient.image.url}`} alt="{ourclient.image}" className="img-fluid"  />
                    </Col>
                  ))}
              </Row>
            </Container>
      </div>
    );
  }
}

export default OurClientsApp;
