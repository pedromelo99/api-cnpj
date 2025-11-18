import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">
                    Desenvolvido como projeto acadêmico 🎓
                </p>
                <p className="footer-api">
                    Dados fornecidos por <a href="https://brasilapi.com.br/" target="_blank" rel="noopener noreferrer">Brasil API</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
