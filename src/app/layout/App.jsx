import React, { Component } from "react";
import { Container} from "semantic-ui-react";
import { Route } from 'react-router-dom'
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import EventDetailed from "../../features/event/EventDetailed/EventDetailed";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import EventForm from '../../features/event/EventForm/EventForm';
import SettingsDashboard from '../../features/user/Settings/SettingDashBoard';
import UserDetailedPage from '../../features/user/UserDetailedPage/UserDetailedPage';



class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
        <Route path='/' component={EventDashboard}/>
        <Route path='/events' component={EventDashboard}/>
        <Route path='/event/:id' component={EventDetailed}/>
        <Route path='/people' component={PeopleDashboard}/>
        <Route path='/profile/:id' component={UserDetailedPage}/>
        <Route path='/settings' component={SettingsDashboard}/>
        <Route path='/createEvent' component={EventForm}/>
         
        </Container>
      </div>
    );
  }
}

export default App;
