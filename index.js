import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Agenda from './src/screens/Angeda'
import Navigator from './src/Navigator'

AppRegistry.registerComponent(appName, () => Navigator);
