import { useState, useEffect } from 'react';
import Input from './Input';
import Button from './Button';
import Card from './Card';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import { validateCNPJ, formatCNPJ, cleanCNPJ } from '../utils/cnpjValidator';
import { fetchCNPJ } from '../services/cnpjService';
import './SearchCNPJ.css';

function SearchCNPJ() {
    const [cnpj, setCnpj] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [companyData, setCompanyData] = useState(null);

    // Carrega o último CNPJ consultado do localStorage
    useEffect(() => {
        const lastCNPJ = localStorage.getItem('lastCNPJ');
        if (lastCNPJ) {
            setCnpj(lastCNPJ);
        }
    }, []);

    const handleCNPJChange = (e) => {
        const value = e.target.value;
        const formatted = formatCNPJ(value);
        setCnpj(formatted);
        setError('');
    };

    const handleSearch = async () => {
        setError('');
        setCompanyData(null);

        const cleanedCNPJ = cleanCNPJ(cnpj);

        // Validação
        if (!cleanedCNPJ) {
            setError('Por favor, digite um CNPJ.');
            return;
        }

        if (cleanedCNPJ.length !== 14) {
            setError('CNPJ deve conter 14 dígitos.');
            return;
        }

        if (!validateCNPJ(cleanedCNPJ)) {
            setError('CNPJ inválido. Verifique os dígitos verificadores.');
            return;
        }

        // Busca na API
        setLoading(true);
        try {
            const data = await fetchCNPJ(cleanedCNPJ);
            setCompanyData(data);
            localStorage.setItem('lastCNPJ', cnpj);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleClear = () => {
        setCnpj('');
        setError('');
        setCompanyData(null);
        localStorage.removeItem('lastCNPJ');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-cnpj">
            <div className="search-container">
                <div className="search-form">
                    <Input
                        label="Digite o CNPJ"
                        value={cnpj}
                        onChange={handleCNPJChange}
                        onKeyPress={handleKeyPress}
                        placeholder="00.000.000/0000-00"
                        maxLength={18}
                        error={error && !loading ? error : ''}
                    />
                    <div className="button-group">
                        <Button onClick={handleSearch} disabled={loading} fullWidth>
                            {loading ? 'Buscando...' : 'Buscar'}
                        </Button>
                        <Button onClick={handleClear} variant="secondary" disabled={loading}>
                            Limpar
                        </Button>
                    </div>
                </div>

                <div className="results-container">
                    {loading && <Loader message="Buscando informações do CNPJ..." />}
                    {error && !loading && <ErrorMessage message={error} />}
                    {companyData && !loading && <Card data={companyData} />}
                </div>
            </div>
        </div>
    );
}

export default SearchCNPJ;
