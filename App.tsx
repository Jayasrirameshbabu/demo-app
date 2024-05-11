import {View, StyleSheet} from 'react-native';
import React from 'react';
import Home from './src/Screens/Home';
// import {TodoProvider} from './src/context/todoContext';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Home />
      </Provider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
