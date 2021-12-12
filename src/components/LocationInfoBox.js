const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event Location Info</h2>
            <ul>
                <li>Type: { info.id }</li>
                <li>Name: { info.title }</li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
