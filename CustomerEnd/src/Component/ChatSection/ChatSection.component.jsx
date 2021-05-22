import './ChatSection.style.css'
import SendIcon from '@material-ui/icons/Send';
import {useState} from 'react';
import MessageFormat from '../MessageFormat/MessageFormat.component';

const ChatSection = () => {
    const [message , setMessage] = useState("");
    const [allMessages, setAllMessages] = useState([]);
    const storeAllMessages = () => {
        setAllMessages(allMessages => [...allMessages,message ])
        setMessage("")
    }
    return(
     <div className="chatBox">
        <div className="chatBoxHeader">
            ChatBot
        </div>
        <div className="chatBoxBody">
            <div className="chatBoxOverlay"> </div>
                <div className="chatLogs">
                    {
                      allMessages.map(message => {
                        return(
                        <MessageFormat >
                            { message }
                        </MessageFormat>)
                       }) 
                    }
                </div>
            </div>
            <div className="chatInput">      
                <form>
                    <input
                     type="text"
                     id="chat-input"
                     placeholder="Send a message..."
                     value={message}
                     className="messageInput"
                     onChange={event => {
                        setMessage(event.target.value)
                        }}
                    />
                    <button 
                    type="submit" 
                    className="chatSubmit" 
                    id="chat-submit"
                    onClick= {event => {
                        event.preventDefault(); 
                        storeAllMessages()
                    }}
                    >
                        <SendIcon/>
                    </button>
                </form>      
            </div>
        </div>
    );
}
export default ChatSection;