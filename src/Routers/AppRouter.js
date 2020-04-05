import React from 'react';
import '../styles/styles.scss';
import 'normalize.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpExpensePage from '../components/HelpExpensePage';
import PageNotFound from '../components/PageNotFound';
import Header from '../components/Header';

const AppRouter = () => (
  <div >
    <BrowserRouter >
      <div>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={ExpenseDashboardPage} />
          <Route exact={true} path="/create" component={AddExpensePage} />
          <Route exact={true} path="/edit" component={EditExpensePage} />
          <Route exact={true} path="/help" component={HelpExpensePage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default AppRouter;