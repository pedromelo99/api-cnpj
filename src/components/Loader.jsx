import './Loader.css';

function Loader({ message = 'Carregando...' }) {
    return (
        <div className="loader-container">
            <div className="spinner"></div>
            <p className="loader-message">{message}</p>
        </div>
    );
}

export default Loader;
