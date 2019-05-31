import { AppRegistry } from "react-native";
import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { name as appName } from "./app.json";
import configStore from "./src/configStore";

const AppProvider = () => {
  return (
    <Provider store={configStore}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppProvider);
