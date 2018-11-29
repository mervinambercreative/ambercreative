//import { Container, Box, Heading, Card, Text } from 'gestalt';
//import { Container, Row, Col } from 'reactstrap';
//import { Link } from 'react-router-dom';
//import Loader from './Loader';
import React, { Component } from 'react';
import { Container, Row, Col, Card, CardHeader } from 'reactstrap';
//import './App.css';
//import 'gestalt/dist/gestalt.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Strapi from 'strapi-sdk-javascript/build/main';
const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

class CareerApp extends Component {
  state = {
    ourclients: []
  }
  async componentDidMount(){
    try{
      const response = await strapi.request('POST', '/graphql',{
        data:{
          query: `query{
            careers{
            id
            bannertitle
            banner{
              url
            }
            position
            designation
          }
      }`
        }
      });
      //console.log(response);
      this.setState({ careers: response.data.careers });
    } catch (err){
      console.error(err);
    }
  }

  render() {
    const { careers } = this.state; {/* use to retrieve the data on the frontpage */}

    return (
      <div>
          <Container id="ourclientid">
            <Row>
              <Col>
                <h2 className="pageTitle">Career</h2>
                <div className="divider"></div>
              </Col>
            </Row>
            <Row id="careerAcc">
                {/* use to display all the array content under frontpages using the map method (frontpages.map) */}
                {/* need to use the key (frontpage.id) to have a unique identifer in retreiving the data */}
                  {careers.map(career =>(
                    <div>
                        <div key={career.id} class="accordion" id="accordionExample">
                            <Card>
                                <CardHeader class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    {careers.position}
                                    </button>
                                </h5>
                                </CardHeader>

                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                {careers.designation}
                                </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                  ))}
              </Row>
            </Container>
      </div>
    );
  }
}

export default CareerApp;
