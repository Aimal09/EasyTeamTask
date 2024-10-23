import React, { useState } from 'react';
import { AppStateProvider } from "./context/AppStateContext.js";
import MainNavigator from "./navigation/MainNavigator";

function App(): React.JSX.Element {
  return (
    <AppStateProvider>
      <MainNavigator />
    </AppStateProvider>
  );
}

export default App;
