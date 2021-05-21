import './ChatSection.style.css'
import SendIcon from '@material-ui/icons/Send';
const ChatSection = () => {
    return(
     <div class="chat-box">
        <div class="chat-box-header">
            ChatBot
        </div>
        <div class="chat-box-body">
            <div class="chat-box-overlay"> </div>
                <div class="chat-logs"> </div>
            </div>
            <div class="chat-input">      
                <form>
                    <input type="text" id="chat-input" placeholder="Send a message..."/>
                    <button type="submit" class="chat-submit" id="chat-submit"><SendIcon/></button>
                </form>      
            </div>
        </div>
    );
}
export default ChatSection;