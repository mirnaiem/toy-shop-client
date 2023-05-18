import {
 createBrowserRouter,
 
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllToys from "../Pages/allToys/AllToys";
import MyToys from "../Pages/myToys/MyToys";
import AddToys from "../Pages/addToys/AddToys";

const router = createBrowserRouter([
 {
   path: "/",
   element: <Main></Main>,
   children:[
    {
     path:'/',
     element:<Home></Home>
    },
    {
     path:'login',
     element:<Login></Login>
    },
    {
     path:'register',
     element:<Register></Register>
    },
    {
     path:'alltoys',
     element:<AllToys></AllToys>
    },
    {
     path:'mytoys',
     element:<MyToys></MyToys>
    },
    {
     path:'addtoys',
     element:<AddToys></AddToys>
    }
   ]
 },
]);

export default router;