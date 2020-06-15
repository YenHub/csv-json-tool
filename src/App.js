import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Lander from './Pages/Lander'

function App() {

    return (
        <Router>
          <Switch>
            <Route path="/">
              <Lander />
            </Route>
          </Switch>

      </Router>
    );
}

export default App;
