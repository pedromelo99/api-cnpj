import './ErrorMessage.css';

function ErrorMessage({ message }) {
    if (!message) return null;

    return (
        <div className="error-message" role="alert">
            <div className="error-icon">⚠️</div>
            <div className="error-content">
                <h3 className="error-title">Erro na consulta</h3>
                <p className="error-text">{message}</p>
            </div>
        </div>
    );
}

export default ErrorMessage;
