import React from 'react'
import { AppRegistry } from 'react-native'
import Root from './App/Root'
import './App/Config/ReactotronConfig'
import configureStore from './App/Store/Store'

// Handling store here to avoid hot-reloading issues
const store = configureStore()
class RNBase extends React.Component {
  render () {
    return <Root {...this.props} store={store} />
  }
}

AppRegistry.registerComponent('MyApplication', () => RNBase)



/*import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';


var fetch = require('fetch');
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


var TestFetch = React.createClass({
  componentDidMount: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((stuff) => console.log(stuff))
      .done();
  },

  render: function() {
    return (
      <View  />
    );
  }
});





AppRegistry.registerComponent('MyApplication', () => WeatherProject)



*/



/*
import React from 'react'
import { AppRegistry } from 'react-native'
import Root from './App/Root'
import './App/Config/ReactotronConfig'
import configureStore from './App/Store/Store'

// Handling store here to avoid hot-reloading issues
const store = configureStore()
class RNBase extends React.Component {
  render () {
    return <Root {...this.props} store={store} />
  }
}

AppRegistry.registerComponent('MyApplication', () => RNBase)
*/