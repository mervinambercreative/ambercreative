import React, { Component} from 'react';
import { Container, Box, Heading, Card, Text } from 'gestalt';
//import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
//import Loader from './Loader';
import './App.css';
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
              content
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
      <Container>
        <Box display="flex" justifyContent="center" marginBottom={2}>
          <Heading color="midnight" size="md">
            Frontpage Name
          </Heading>
        </Box>
        <Box>
        {/* use to display all the array content under frontpages using the map method (frontpages.map) */}
        {/* need to use the key (frontpage.id) to have a unique identifer in retreiving the data */}
          {frontpages.map(frontpage =>(
            <Box key={frontpage.id}> 
              <Card>
                  <Text size="xl">{frontpage.name}</Text>
                  <Text>{frontpage.content}</Text>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    );
  }
}

export default App;
