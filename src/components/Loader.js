import spinner from './loader.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" />
            <h1>Φόρτωση δεδομένων</h1>
        </div>
    )
}

export default Loader;
