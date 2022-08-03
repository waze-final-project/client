import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  UserContextProvider  from './context/user.context';
import User from './components/users'
import './App.css';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
          <Router>
            <Routes>
              <Route path="" element={<User/>}></Route>
            </Routes>
          </Router>
      </div>
    </UserContextProvider>
  );
}

export default App;
