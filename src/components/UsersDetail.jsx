import React from 'react';
import { useLoaderData } from 'react-router';

const UsersDetail = () => {
    const user = useLoaderData();
    console.log(user);

    return (
        <div>
            <h1>User Details</h1>
        </div>
    );
};

export default UsersDetail;