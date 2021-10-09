import React, { useEffect } from "react";
import { Provider } from "react-redux";

// Components
import Home from "./components/Home";
import Navbar from "./components/Navbar";

// store 
import store from "./redux/store";

const App = () => {
  useEffect(() => {
    document.title = "Electric Cars, Solar & Clean Energy | Tesla Clone";
  }, []);

  return (
    <Provider store={store}>
      <Navbar />
      <Home />
    </Provider>
  );
};

export default App;
