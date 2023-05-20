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
import Update from "../Pages/Update/Update";
import Details from "../Pages/Details/Details";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import NotFound from "../Pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    
      path:'*',
      element:<NotFound></NotFound>
     
  },
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
     element:<AllToys></AllToys>,
     loader:()=>fetch('https://assignment-11-server-alpha-six.vercel.app/alltoys')
    },
    {
     path:'mytoys',
     element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
     
    },
    {
     path:'addtoys',
     element:<AddToys></AddToys>
    },
    {
      path:'update/:id',
      element:<Update></Update>,
      loader:({params})=>fetch(`https://assignment-11-server-alpha-six.vercel.app/mytoys/${params.id}`)
    },
    {
      path:'details/:id',
      element:<PrivateRoute><Details></Details></PrivateRoute>,
      loader:({params})=>fetch(`https://assignment-11-server-alpha-six.vercel.app/mytoys/${params.id}`)
    },
    {
      path:'/blogs',
      element:<Blog></Blog>
    }
   ]
 },
]);

export default router;