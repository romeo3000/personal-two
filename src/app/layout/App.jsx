import React, { Component } from "react";
import { Container} from "semantic-ui-react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="lightblue_round">
        <h1>Container </h1>
          <EventDashboard className=""/>
        </Container>
      </div>
    );
  }
}

export default App;
