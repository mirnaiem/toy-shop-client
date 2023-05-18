import {
 createBrowserRouter,
 
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../home/Home/Home";

const router = createBrowserRouter([
 {
   path: "/",
   element: <Main></Main>,
   children:[
    {
     path:'home',
     element:<Home></Home>
    }
   ]
 },
]);

export default router;