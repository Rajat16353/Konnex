import './CommonAnnouncement.style.css'
import React ,{useEffect,useState} from 'react'
import MessageFormat from '../MessageFormat/MessageFormat.component'

const CommonAnnouncement = () => {
    const [data ,setData] = useState([])
        const getUsers= async () => {
            const response = await fetch('https://konnexa-api.herokuapp.com/announcements/');
            const data = await response.json();
            console.log(data);
            return data;
        }
        useEffect(async() => {
            const data = await getUsers()
            console.log(data,"inside UseEffect");
            setData(data)
        },[])
    return(
        <div className="commonAnnounce">
            <div className="title2">
                <h1>Common Announcement</h1>
                <hr></hr>
            </div>
            <div className="text">
                { 
                    data.map(ele=> {
                       return(
                           <MessageFormat >
                               {ele.announcement}
                           </MessageFormat>  
                        )
                    })
                }
            </div>
        </div>
    )
} 
export default CommonAnnouncement;