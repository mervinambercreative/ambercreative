import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
//import 'gestalt/dist/gestalt.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import Header from './components/Header';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import OurClients from './components/OurClients';
import Portfolio from './components/Portfolio';

import registerServiceWorker from './registerServiceWorker'; 

const Root = ({data}) => (
    <Router>
        <React.Fragment>
            <Header  />
            <Route component={App} exact path="/"  />
            <Route component={Aboutus} path="/aboutus"  />
            <Route component={OurClients} path="/ourclients"  />
            <Route component={Portfolio} path="/portfolio"  />
            <Footer />
        </React.Fragment>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();