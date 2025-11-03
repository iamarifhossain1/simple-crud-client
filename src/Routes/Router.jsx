import { createBrowserRouter } from "react-router";
import Users from "../components/Users";
import App from "../App";
import UsersDetail from "../components/UsersDetail";
import UpdateUser from "../components/UpdateUser";

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
    },
    {
        path: '/users/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
        Component: UsersDetail,
    },
    {
        path: '/update/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
        Component: UpdateUser,
    }
])

export default router;