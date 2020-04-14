import React from 'react';
import firebase from '../services/firebase';
import HomeComponent from '../components/Home';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  StatusBar,
  Button,
} from 'react-native';

const DB = firebase.db;
let tablesRestaurant;

export default class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      pendingsTasks: [],
    };
  }

  componentDidMount() {
    tablesRestaurant = DB.collection('restaurants')
      .doc(`QtLVkjHLnXZPDj4pbWKw`)
      .collection('tables');

    tablesRestaurant.onSnapshot(tables => {
      let tablesArray = [];
      tables.forEach(singleTable => {
        if (singleTable.data().pay) {
          tablesArray.push({
            numberOfTable: singleTable.data().number,
            alert: 'Bill pending.',
            id: singleTable.id,
          });
        }
        if (singleTable.data().waiter) {
          tablesArray.push({
            numberOfTable: singleTable.data().number,
            alert: 'Waiter please.',
            id: singleTable.id,
          });
        }
        if (singleTable.data().orderStatus === 'pending') {
          tablesArray.push({
            numberOfTable: singleTable.data().number,
            alert: 'Order pending.',
            orderActual: singleTable.data().orderActual,
            id: singleTable.id,
          });
        }
      });
      this.setState({pendingsTasks: tablesArray});
    });
  }

  onPressButton(table, alert) {
    let tableSelected = DB.collection('restaurants')
      .doc(`QtLVkjHLnXZPDj4pbWKw`)
      .collection('tables')
      .doc(table);
    if (alert === 'Bill pending.') {
      tableSelected.update({pay: false});
    }
    if (alert === 'Waiter please.') {
      tableSelected.update({waiter: false});
    }
    Alert.alert('Task Completed');
  }

  render() {
    return (
      <View>
        <HomeComponent
          pendingsTasks={this.state.pendingsTasks}
          onPressButton={this.onPressButton}
        />
      </View>
    );
  }
}
