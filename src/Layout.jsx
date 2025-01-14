import React from "react";
import {Outlet} from "react-router-dom"
import Navbar from  "./components/Header/Navbar.jsx"
import Sidebar from "./components/Header/Sidebar.jsx";

function Layout (){

    return (
             <>
                  <Navbar />
                      <div className="sm:flex flex-none">
                      <div className="">
                           <Sidebar />
                      </div>
                           <div className="sm:flex-1">
                               <Outlet />
                           </div>
                     </div>
             </>
    )
}

export default Layout ;