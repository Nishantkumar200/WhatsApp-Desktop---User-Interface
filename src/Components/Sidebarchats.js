import React from 'react';
import '../style/sidebarchat.css';

import {Avatar} from '@material-ui/core';

const Sidebarchats = () => {
    return (
        <div className="sidebarChats">
            <Avatar />
            <div className="chat_info">
                <h3>John Doe</h3>
                <h6>This is the last message</h6>
            </div>
        </div>
    )
}

export default Sidebarchats
