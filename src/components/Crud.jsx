import React, { Fragment, useState } from 'react';
import UserTable from './UserTable';
import { v4 as uuidv4 } from 'uuid'
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
import '../../src/index.css'



const Crud = () => {
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


    return (
        <Fragment>
            <h1>CRUD App with Hooks</h1>
            <div className="row">
                <div className="col-md-6 mb-4">
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
                <div className="col-md-6">
                    <h2>View Users</h2>
                    <UserTable
                        users={users} 
                        deleteUser={deleteUser}
                        editRow = {editRow}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default Crud
