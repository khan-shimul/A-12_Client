import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home/Home";
import Signup from "./Authintication/Signup";
import Login from "./Authintication/Login";
import AllProperty from "./Components/AllProperty/AllProperty";
import Dashboard from "./Layout/Dashboard";
import AdminProfile from "./Components/AdminThing/AdminProfile";
import ManagePropertyByAdmin from "./Components/AdminThing/ManagePropertyByAdmin";
import ManageUsersByAdmin from "./Components/AdminThing/ManageUsersByAdmin";
import ManageReviewsByAdmin from "./Components/AdminThing/ManageReviewsByAdmin";
import UserProfile from "./Components/UserThing/UserProfile";
import UserReviews from "./Components/UserThing/UserReviews";
import PropertyBought from "./Components/UserThing/PropertyBought";
import Wishlist from "./Components/UserThing/Wishlist";
import AgentProfile from "./Components/AgentThing/AgentProfile";
import AddProperty from "./Components/AgentThing/AddProperty";
import AgentAddedProperty from "./Components/AgentThing/AgentAddedProperty";
import AgentSoldProperty from "./Components/AgentThing/AgentSoldProperty";
import RequestedProperty from "./Components/AgentThing/RequestedProperty";


 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/signup',
            element:<Signup></Signup>,
        },
        {
            path:'/allproperty',
            element:<AllProperty></AllProperty>,
        },
      ]
    },

    {
      path:'dashboard',
      element:<Dashboard></Dashboard> ,
      children:[
        {
         path:'/dashboard/adminprofile',
         element:<AdminProfile></AdminProfile>
        },
        {
         path:'/dashboard/managepropertybyadmin',
         element:<ManagePropertyByAdmin></ManagePropertyByAdmin>
        },
        {
         path:'/dashboard/manageusersbyadmin',
         element:<ManageUsersByAdmin></ManageUsersByAdmin>
        },
        {
         path:'/dashboard/managereviewsbyadmin',
         element:<ManageReviewsByAdmin></ManageReviewsByAdmin>
        },
        
        //  user

        {
         path:'/dashboard/userprofile',
         element:<UserProfile></UserProfile>
        },
        {
         path:'/dashboard/userreview',
         element:<UserReviews></UserReviews>
        },
        {
         path:'/dashboard/propertybought',
         element:<PropertyBought></PropertyBought>
        },
        {
         path:'/dashboard/wishlist',
         element:<Wishlist></Wishlist>
        },
        
        // agent

        {
          path:'/dashboard/agentprofile',
          element:<AgentProfile></AgentProfile>
         },
         {
          path:'/dashboard/addproperty',
          element:<AddProperty></AddProperty>
         },
         {
          path:'/dashboard/myaddedproperty',
          element:<AgentAddedProperty></AgentAddedProperty>
         },
         {
          path:'/dashboard/soldproperty',
          element:<AgentSoldProperty></AgentSoldProperty>
         },
         {
          path:'/dashboard/requestedproperty',
          element:<RequestedProperty></RequestedProperty>
         },
      ]
      }

  ]);