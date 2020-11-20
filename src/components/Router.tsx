import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage';
import GenerateGraphPage from '../pages/GenerateGraphPage';
import InfoPage from '../pages/InfoPage';
import Menu from './Menu';
import NotFound from '../pages/NotFound';
import ProjectGraph from '../pages/ProjectGraph';

// Change

const Router = (): React.ReactElement => (
  <>
    <BrowserRouter>
      <Route path="/" component={Menu} />
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/project-graph" exact component={ProjectGraph} />
        <Route path="/generate-graph" exact component={GenerateGraphPage} />
        <Route path="/info" exact component={InfoPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Router;
