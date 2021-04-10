import React from 'react';
import './SidebarRow.css';
import { Avatar } from "@material-ui/core";







//you can pass in props for the function, but I have taken
//it out because you can just pass in title itself


function SidebarRow({src, Icon, title}) { //<--- instead of (props) pass in ({title})
//if there is a src then we
//want to render out an Avatar

    return (
        <div className='sidebar-row'>
        {src && <Avatar src={src}/> }
        {Icon && <Icon/> }

            <h4>{title}</h4>


        </div>
    )
}

export default SidebarRow
