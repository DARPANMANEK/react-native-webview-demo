import React, {useState} from 'react';
import {View, Alert, Button, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

const App = () => {
  const webViewRef = React.useRef(null);
  const [first, setfirst] = useState(false);
  const imageUrl =
    'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg';

  return (
    <View style={styles.container}>
      {first && (
        <WebView
          ref={webViewRef}
          source={{uri: imageUrl}}
          style={styles.webView}
          originWhitelist={['*']}
          onError={error => console.error('WebView error:', error)}
        />
      )}

      <Button title="Download Image" onPress={() => setfirst(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webView: {
    width: '100%',
    height: '80%',
  },
});

export default App;
