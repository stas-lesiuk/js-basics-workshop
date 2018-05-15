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

// import Home from 'routes/Home';
import Private from 'routes/Private';
import NotFound from 'routes/NotFound';

import Header from 'components/Header';
import Footer from 'components/Footer';
import SystemAlerts from 'components/SystemAlerts';

import Home from './Home';
import News from './News';
import Navbar from './Navbar';

import './app.scss';

export class App extends React.Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

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
    return <ConnectedRouter history={history}>
      <main>
        <Navbar/>
        <Route path="/home" component={Home}/>
        <Route path="/news" component={News}/>
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
