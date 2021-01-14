import React, {useState} from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid'
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { About } from './components/About';
import { Users } from './components/Users';
import { Pokemons } from './components/Pokemons';
import { Provider } from 'react-redux';

import generateStore from './redux/store';
import MaterialUi from './components/MaterialUi';
import { ThemeProvider } from '@material-ui/core';
import theme from '../src/configTheme';
import NavBar from './components/NavBar';


function App() {

  const usersData = [
    {id:uuidv4(), name: 'Tania', username:'floppydiskette'},
    {id:uuidv4(), name: 'Craig', username:'siliconeidolon'},
    {id:uuidv4(), name: 'Ben', username:'benisphere'},
  ];

  const [users, setusers] = useState(usersData);

  // add user
  const addUser = (user)=> {
    user.id = uuidv4();
    setusers([
      ...users,
      user
    ]);
  };

  // delete user
  const deleteUser = id => {
    setusers(users.filter(user => user.id !== id));
    console.log(users);
  }

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id:null, name:'', username:''
  });

  const editRow = (user)=>{
    setEditing(true);
    setCurrentUser({
      id:user.id,
      name: user.name,
      username: user.username
    })

  };

  const updateUser = (id, updatedUser)=>{
    setEditing(false);
    setusers(users.map(user => (user.id === id ? updatedUser : user)));
  }

  const store = generateStore();

  return (
    <Router>
      <div className="container">
        <div className="btn-group mt-5">
          <Link to="/" className="btn btn-dark">Home</Link>
          <Link to="/about" className="btn btn-dark">About Us</Link>
          <Link to="/contact" className="btn btn-dark">Contact</Link>
          <Link to="/pokemons" className="btn btn-dark">Pokemons</Link>
          <Link to="/material-ui" className="btn btn-dark">Material ui</Link>
          <NavLink to="/crud" className="btn btn-dark" activeClassName="active">Crud</NavLink>
        </div>
        <Switch>
          <Route path="/" exact>
            <h2>Home</h2>
          </Route>
          <Route path="/crud">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
              <div className="flex-large">
                {
                  editing ? (
                    <div>
                      <h2>Edit User</h2>
                      <EditUserForm
                        currentUser={currentUser}
                        updateUser={updateUser}
                      />
                    </div>
                  ) : (
                    <div>
                      <h2>Add User</h2>
                      <AddUserForm addUser={addUser} />
                    </div>
                  )
                }
              </div>
              <div className="flex-large">
                <h2>View Users</h2>
                <UserTable
                  users={users} 
                  deleteUser={deleteUser}
                  editRow = {editRow}
                />
              </div>
            </div>
          </Route>
          <Route path="/about/:id">
            <Users/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <h2>Contact</h2>
          </Route>
          <Route path="/pokemons">
            <Provider store={store}>
              <Pokemons/>
            </Provider>
          </Route>
          <Route path="/material-ui">
            <ThemeProvider theme={theme}>
              <NavBar/>
              <MaterialUi/>
            </ThemeProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  ); 
}

export default App;
