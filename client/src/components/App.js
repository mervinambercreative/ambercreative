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

class App extends Component {
  state = {
    frontpages: []
  }
  async componentDidMount(){
    try{
      const response = await strapi.request('POST', '/graphql',{
        data:{
          query: `query{
            frontpages{
              id
              name
              homeslider{
                id
                url
              }
              content
              content2
              content3
              content4
            }
          }`
        }
      });
      //console.log(response);
      this.setState({ frontpages: response.data.frontpages });
    } catch (err){
      console.error(err);
    }
  }

  render() {
    const { frontpages } = this.state; {/* use to retrieve the data on the frontpage */}

    return (
      <div>
        <Container fluid>
          {/* use to display all the array content under frontpages using the map method (frontpages.map) */}
          {/* need to use the key (frontpage.id) to have a unique identifer in retreiving the data */}
            {frontpages.map(frontpage =>(
              <Row key={frontpage.id}>
                  {/*<img src={`${apiUrl}${frontpage.homeslider.url}`} class="img-fluid" />*/}
                  <img src="https://place-hold.it/2560x800" alt="Slider" class="img-fluid" />
                <Container>
                  <Col md="12"><p>{frontpage.content}</p></Col>
                  <Col md="12"><p>{frontpage.content2}</p></Col>
                  <Col md="12"><p>{frontpage.content3}</p></Col>
                </Container>
              </Row>
            ))}
        </Container>
      </div>
    );
  }
}

export default App;