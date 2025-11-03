import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {

    const user = useLoaderData();
    console.log(user);

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email);
        const updateUser = { name, email }

        // send data to the server

        fetch(`http://localhost:3000/users/${user._id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(response => response.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Profile updated')
                }

            })
    }


    return (
        <div>
            <h2>Update a User</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" defaultValue={user.name} />
                <br />
                <input type="email" name="email" id="" defaultValue={user.email} />
                <br />
                <input type="submit" value="Update user" />
            </form>
        </div>
    );
};

export default UpdateUser;