import React from 'react';
import Sidebar from "./Sidebar";
import Topbar from "../topbar/Topbar";

function Layout(props) {
    return (
        <div>
            <Topbar/>
            <div style={{display: "flex"}}>
                <Sidebar history={props.history}/>
                <div style={{maxWidth: '900px'}}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Layout;