const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Πληροφορίες διαδρομής</h2>
            <ul>
                <li>Τύπος: { info.id }</li>
                <li>Συμβάν: { info.title }</li>
                <li>Διαδρομή μέσω Ε111 αποκλεισμένη</li>
                <li>Νέα διαδρομή μέσω της Ε246</li>
                <li>Προσέγγιση καθυστέρησης: 20 λεπτά</li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
