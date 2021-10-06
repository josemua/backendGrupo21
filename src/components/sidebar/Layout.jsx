import React from 'react';
import Sidebar from "./Sidebar";

function Layout(props) {
    return (
            <div style={{display: "flex"}}>
                <Sidebar history={props.history}/>
                <div style={{maxWidth: '900px'}}>
                    {props.children}
                </div>
            </div>
    );
}

export default Layout;