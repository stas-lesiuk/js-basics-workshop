import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Helmet from 'react-helmet';
import cx from 'classnames';
import history from 'modules/history';
import RoutePublic from 'modules/RoutePublic';
import RoutePrivate from 'modules/RoutePrivate';

import config from 'config';
import { showAlert } from 'actions';

import Home from 'routes/Home';
import Private from 'routes/Private';
import NotFound from 'routes/NotFound';

import Header from 'components/Header';
import Footer from 'components/Footer';
import SystemAlerts from 'components/SystemAlerts';

import MenuTable from './MenuTable';

import './app.scss';

export class App extends React.Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      sum: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    const {dispatch, user} = this.props;
    const {user: nextUser} = nextProps;

    /* istanbul ignore else */
    if (!user.isAuthenticated && nextUser.isAuthenticated) {
      dispatch(showAlert('Hello! And welcome!', {type: 'success', icon: 'i-trophy'}));
    }
  }

  render() {
    // const {app, dispatch, user} = this.props;
    const title = 'My first React page';
    const desc = 'I hope this will be awesome';
    const foodTitle = 'Food menu';
    const food = [
      {name: 'Pizza', price: 20},
      {name: 'Sushi', price: 120},
      {name: 'Burger', price: 30}
    ];
    const drinksTitle = 'Drinks menu';
    const drinks = [
      {name: 'Soda', price: 5},
      {name: 'Coke', price: 4},
      {name: 'Beer', price: 8}
    ];
    const clickHandler = item =>
      this.setState({
        orders: this.state.orders.concat(item),
        sum: this.state.sum + item.price
      });

    return <ConnectedRouter history={history}>
      <main>
        <h1>{title}</h1>
        <p>{desc}</p>
        <MenuTable title={foodTitle} data={food} click={clickHandler}/>
        <MenuTable title={drinksTitle} data={drinks} click={clickHandler}/>
        <section>
          <h2>Order list</h2>
          <ul>
            {
              this.state.orders.map(order => <li>{order.name }</li>)
            }
          </ul>
          <strong>Order sum: {this.state.sum}</strong>
        </section>
        {/*{this.renderMenuTable(foodTitle, food)}*/}
        {/*{this.renderMenuTable(drinksTitle, drinks)}*/}
      </main>
    </ConnectedRouter>;
  }

  // renderMenuTable(title, data) {
  //   return <section className="menu-section">
  //     <h2>{title}</h2>
  //     <ul>
  //       {
  //         data.map(item => <li>{item.name}</li>)
  //       }
  //     </ul>
  //   </section>
  // }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    app: state.app,
    user: state.user,
  };
}

export default connect(mapStateToProps)(App);
