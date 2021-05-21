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
     <div className="chat-box">
        <div className="chat-box-header">
            ChatBot
        </div>
        <div className="chat-box-body">
            <div className="chat-box-overlay"> </div>
                <div className="chat-logs">
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
            <div className="chat-input">      
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
                    class="chat-submit" 
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