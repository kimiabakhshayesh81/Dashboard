import routes from "./route";
import React from "react";
import {useRoutes} from 'react-router-dom'
import TopBar from "./component/topbar/TopBar";
import SideBar from "./component/sidebar/SideBar";
import './App.css'

function App() {
  let router = useRoutes(routes)
  

  return (
    <div>
        <TopBar />
        <div className="container">
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="content">
                {router}
            </div>
        </div>
    </div>
);
}

export default App;
