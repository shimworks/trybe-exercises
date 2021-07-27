import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FormDataDisplay from './pages/FormDataDisplay';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div> Forms-Redux</div>
        <Switch>
          <Route path="/formDisplay" component={ FormDataDisplay } />
          <Route path="/professionalForm" component={ ProfessionalForm } />
          <Route exact path="/" component={ PersonalForm } />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
