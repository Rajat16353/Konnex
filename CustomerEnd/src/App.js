import './App.css';
import Header from './Component/Header/Header.component';
import Analysis from './Component/Analysis/Analysis.component'
import CommonAnnouncement from './Component/CommonAnnouncement/CommonAnnouncement.component'
import ChatSection from './Component/ChatSection/ChatSection.component'

function App() {
    return(
        <div>
            <Header />
            <Analysis />
            <CommonAnnouncement/>
            <ChatSection/>
        </div>
    );
}
export default App;
