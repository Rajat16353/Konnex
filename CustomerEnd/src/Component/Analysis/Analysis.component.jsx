import './Analysis.style.css'
import RingProgressComponent from '../RingProgress/RingProgress.component'

const Analysis = () => {
  return(
    <div className="analysis">
        <div className="bugReportingRateContainer">
            <RingProgressComponent />
        </div>
        <div className="userTimeContainer">
            <RingProgressComponent />
        </div>
    </div>
  )
} 
export default Analysis;