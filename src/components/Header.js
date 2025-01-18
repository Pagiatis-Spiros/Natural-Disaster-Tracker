import DownloadButton from "./DownloadButton"

const Header = ({ eventData }) => {
    return (
        <header className="header">
            <h1> Helping Hand Aplication </h1>
            <DownloadButton eventData={eventData}/>
        </header>
    )
}

export default Header
