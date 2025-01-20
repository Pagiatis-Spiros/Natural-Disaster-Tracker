const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Πληροφορίες διαδρομής</h2>
            <ul>
                <li>Τύπος: { info.id }</li>
                <li>Συμβάν: { info.title }</li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
