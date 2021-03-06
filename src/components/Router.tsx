import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage';
import GenerateGraphPage from '../pages/GenerateGraphPage';
import InfoPage from '../pages/InfoPage';
import AboutProjectPage from "../pages/AboutProjectPage";
import Menu from './Menu';
import NotFound from '../pages/NotFound';
import ProjectGraph from '../pages/ProjectGraph';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';

// Change

const Router = (): React.ReactElement => (
  <>
    <BrowserRouter>
      <Route path="/" component={Menu} />
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/project-graph" exact component={ProjectGraph} />
        <Route path="/generate-graph" exact component={GenerateGraphPage} />
        <Route path="/about-project" exact component={AboutProjectPage} />
        <Route path="/info" exact component={InfoPage} />
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/terms-and-conditions" exact component={Terms} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Router;
