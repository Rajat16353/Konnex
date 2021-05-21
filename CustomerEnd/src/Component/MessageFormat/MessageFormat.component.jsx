import React from 'react';
import './MessageFormat.style.css'

const MessageFormat = ({children}) => {
   return(
    <div className="messageFormat">
        {children}
    </div>
   )
}

export default MessageFormat;