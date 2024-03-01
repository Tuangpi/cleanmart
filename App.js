import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <StatusBar style="auto" hidden />
      <View style={{ width: "100%", height: "100%" }}>
        <WebView source={{ uri: "http://cms.cleanmark.com.sg/driver-login" }} style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
          originWhitelist={['*']}
          mediaCapturePermissionGrantType="grantIfSameHostElsePrompt"
          mediaPlaybackRequiresUserAction={false}
          startInLoadingState
          allowsInlineMediaPlayback={true}
          allowsFullscreenVideo
          domStorageEnabled
          javaScriptEnabled
          scalesPageToFit
          pullToRefreshEnabled />
      </View>
    </SafeAreaView>
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
