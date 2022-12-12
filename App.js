import React, { useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from "react-native";

import { WebView } from "react-native-webview";

import { MapaHTML, script } from "./scriptmapa";
const myHtmlFile = require("./assets/teste-mapa.html");

const runFirst = `console.log("mapa");`;

const MapPageContent = () => {
  useEffect(() => {
    webref.injectJavaScript(script);
  }, []);

  return (
    <WebView
      ref={(r) => (webref = r)}
      originWhitelist={["*"]}
      javaScriptEnabledAndroid={true}
      style={styles.mapa}
      source={{ html: MapaHTML }}
      onMessage={(event) => {}}
      injectedJavaScript={runFirst}
    />
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MapPageContent />
      <View style={{height: 200}}>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapa: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
