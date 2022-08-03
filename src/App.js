import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  UserContextProvider  from './context/user.context';
import User from './components/Users'
import './App.css';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <div>
          <Router>
            <Routes>
              <Route path="" exact element={<User/>}></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
