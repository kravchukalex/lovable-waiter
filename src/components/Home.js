import React from 'react';
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
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default ({pendingsTasks, onPressButton}) => {
  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <View style={styles.container}>
            <Text style={styles.title}>Lovable Waiters</Text>
          </View>
          <Button
            style={{
              borderWidth: 4,
              borderColor: '#20232a',
              borderRadius: 6,
            }}
            title="Log Out"
            onPress={() => Alert.alert('Log Out')}
          />
          <View>
            {pendingsTasks.length
              ? pendingsTasks.map(table => (
                  <View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        marginTop: 32,
                        paddingHorizontal: 24,
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        borderColor: '#20232a',
                        borderRadius: 6,
                      }}>
                      <Text style={styles.sectionTitle}>
                        Table {table.numberOfTable}
                      </Text>
                      {table.alert === 'Order pending.' ? (
                        <Button
                          color="#ff2068"
                          // fontWeigh="700"
                          title="View Order"
                          onPress={() => Alert.alert(`${table.orderActual}`)}
                        />
                      ) : (
                        <Button
                          color="#ff2068"
                          // fontWeigh="700"
                          title="Complete"
                          onPress={() => onPressButton(table.id, table.alert)}
                        />
                      )}
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        marginTop: 5,
                        paddingHorizontal: 24,
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        borderColor: '#20232a',
                        borderRadius: 6,
                      }}>
                      <Text style={styles.sectionDescription}>
                        Task: {table.alert}
                      </Text>
                    </View>
                    <View
                      style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 0.5,
                        padding: 18,
                      }}
                    />
                  </View>
                ))
              : null}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    //borderWidth: 4,
    //borderColor: '#20232a',
    //borderRadius: 6,
    backgroundColor: '#ffffff',
    color: '#000000',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
