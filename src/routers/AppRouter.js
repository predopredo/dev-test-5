// NPM MODULES
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// COMPONENTS
import Header from '../components/Header/Header'
import InitialPage from '../components/InitialPage/InitialPage';
import QuestionTwo from '../components/QuestionTwo/QuestionTwo';
import QuestionThree from '../components/QuestionThree/QuestionThree';
import Calculator from '../components/Calculator/Calculator';
import Secret from '../components/Secret/Secret';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Redirect from="/" to="index.html" exact={true} />
      <Route path="/questionTwo" component={QuestionTwo} />
      <Route path="/questionThree" component={QuestionThree} />
      <Route path="/secret" component={Secret} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/index.html" component={InitialPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter;