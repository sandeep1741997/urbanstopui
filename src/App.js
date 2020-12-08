import React, { Suspense } from 'react';
//import { Switch, Route , BrowserRouter as Router,} from 'react-router-dom';
import './App.css';
import { Card, CardGroup } from 'react-bootstrap';
import DonutCharts from './components/DonutCharts';
import LineCharts from './components/LineCharts';
import List from './components/List';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import NavbarMenu from './components/NavbarMenu';
import { Router } from 'react-router-dom';
import ListType2 from './ListType2';
import { Children } from 'react';


function App() {
  return (
    <div className="App">
      <link rel="stylesheet" 
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      </link>
      <NavbarMenu/>
      <LineCharts />
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>Data Quality Index</Card.Title>
              <DonutCharts price="75" title="Data Quality Index" />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Top Errors</Card.Title>
            <Card.Text>
              <List currency="1500"/>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Assigned to Me</Card.Title>
            <Card.Text>
              <List />
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>Business Imapact</Card.Title>
              <DonutCharts price="$16m" title="Business Impact" >
                <div className="row">
                <p color="red">High</p>&nbsp;&nbsp;
                <p color="Blue">Medium</p>&nbsp;&nbsp;
                <p color="green">Low</p>
                </div>
              </DonutCharts>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Highest Bussiness Impact</Card.Title>
            <Card.Text>
              <List  currency="$1500.00"/>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Activity Stream</Card.Title>
            <Card.Text>
              <ListType2 />
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default App;
