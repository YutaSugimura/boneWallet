/**
 * @format
 */

import "react-native-get-random-values";
import "@ethersproject/shims";
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
// import "./src/utils/wdyr";

AppRegistry.registerComponent(appName, () => App);
