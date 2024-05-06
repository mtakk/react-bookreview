import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import React from "react";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <Router />
          </Provider>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
