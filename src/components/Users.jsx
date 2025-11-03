import React, { use, useState } from 'react';
import { Link } from 'react-router';

const Users = ({ userPromise }) => {
    const userData = use(userPromise);
    console.log(userData);

    const [users, setUsers] = useState(userData);

    const handleAddUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email);
        const newUser = { name, email }
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(response => response.json())
            .then(data => {
                console.log('after saving user', data);
                if (data.insertedId) {
                    newUser._id = data.insertedId;
                    const newUsers = [...users, newUser];
                    setUsers(newUsers)
                    alert('Data added successfully')
                }
                e.target.reset();

            })

    }

    const handleDeleteUser = (id) => {
        console.log('Delete user', id);

        fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                console.log('after delete', data);
                if (data.deletedCount) {
                    alert('Deleted Successfully')
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)
                }

            })

    }

    return (
        <div>
            <h3>Users: {users.length}</h3>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' placeholder='Name' />
                <br />
                <input type="email" name="email" placeholder='Email' id="" />
                <br />
                <input type="submit" value="Add User" />
            </form>
            <p>-------------------------------</p>
            <div>
                {
                    users.map(user => <p key={user._id}>Name: {user.name}
                        <Link to={`/users/${user._id}`}>Details</Link>
                        <Link to={`/update/${user._id}`}>Update</Link>
                        <br></br> Email: {user.email}
                        <button onClick={() => handleDeleteUser(user._id)}>x</button></p>)

                }
            </div>

        </div>
    );
};

export default Users;