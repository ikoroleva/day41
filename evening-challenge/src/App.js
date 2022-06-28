// import logo from './logo.svg';
import './App.css';
import users from './Users.json';
import { User } from './User';

import { useState } from "react";

function App() {

  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [searchTerm, setSearchTerm] = useState([]);


  return (
    <div className="App">
      <input className="search" type="text" name="search" placeholder="Search for user" autoComplete="off" onChange={(e) => setSearchTerm(e.target.value)}></input>

      {users.filter((user) => user.name.toLowerCase().
        match(searchTerm.toLowerCase())).
        map((user, i) => (
          <User user={user} key={i} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />

        ))}
    </div>
  );
}

export default App;
