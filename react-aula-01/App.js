import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
      <WebView
            style={styles.container}
            source={{ uri: 'https://fiap.com.br' }}
          />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App