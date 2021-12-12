import DownloadButton from "./DownloadButton"

const Header = ({ eventData }) => {
    return (
        <header className="header">
            <h1> Natural Disaster Tracker </h1>
            <DownloadButton eventData={eventData}/>
        </header>
    )
}

export default Header
