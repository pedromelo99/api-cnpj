import './Card.css';

function Card({ data }) {
    if (!data) return null;

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR');
    };

    const formatCurrency = (value) => {
        if (!value) return 'N/A';
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };

    return (
        <div className="card" role="article">
            <div className="card-header">
                <h2 className="card-title">{data.razao_social || 'Sem informação'}</h2>
                <span className={`badge ${data.situacao_cadastral === 'ATIVA' ? 'badge-active' : 'badge-inactive'}`}>
                    {data.situacao_cadastral || 'N/A'}
                </span>
            </div>

            <div className="card-content">
                <section className="card-section">
                    <h3 className="section-title">📋 Informações Principais</h3>
                    <div className="info-grid">
                        <div className="info-item">
                            <span className="info-label">CNPJ:</span>
                            <span className="info-value">{data.cnpj || 'N/A'}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Nome Fantasia:</span>
                            <span className="info-value">{data.nome_fantasia || 'N/A'}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Data de Abertura:</span>
                            <span className="info-value">{formatDate(data.data_inicio_atividade)}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Data da Situação:</span>
                            <span className="info-value">{formatDate(data.data_situacao_cadastral)}</span>
                        </div>
                    </div>
                </section>

                <section className="card-section">
                    <h3 className="section-title">📍 Endereço</h3>
                    <div className="info-grid">
                        <div className="info-item full-width">
                            <span className="info-label">Logradouro:</span>
                            <span className="info-value">
                                {data.logradouro || 'N/A'}, {data.numero || 'S/N'}
                                {data.complemento && ` - ${data.complemento}`}
                            </span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Bairro:</span>
                            <span className="info-value">{data.bairro || 'N/A'}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Município:</span>
                            <span className="info-value">{data.municipio || 'N/A'} - {data.uf || 'N/A'}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">CEP:</span>
                            <span className="info-value">{data.cep || 'N/A'}</span>
                        </div>
                    </div>
                </section>

                <section className="card-section">
                    <h3 className="section-title">📞 Contato</h3>
                    <div className="info-grid">
                        <div className="info-item">
                            <span className="info-label">Telefone:</span>
                            <span className="info-value">
                                {data.ddd_telefone_1 ? `(${data.ddd_telefone_1.substring(0, 2)}) ${data.ddd_telefone_1.substring(2)}` : 'N/A'}
                            </span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">E-mail:</span>
                            <span className="info-value">{data.email || 'N/A'}</span>
                        </div>
                    </div>
                </section>

                <section className="card-section">
                    <h3 className="section-title">💼 Atividade Econômica</h3>
                    <div className="info-grid">
                        <div className="info-item full-width">
                            <span className="info-label">CNAE Principal:</span>
                            <span className="info-value">
                                {data.cnae_fiscal ? `${data.cnae_fiscal} - ${data.cnae_fiscal_descricao}` : 'N/A'}
                            </span>
                        </div>
                    </div>
                </section>

                <section className="card-section">
                    <h3 className="section-title">ℹ️ Outras Informações</h3>
                    <div className="info-grid">
                        <div className="info-item">
                            <span className="info-label">Capital Social:</span>
                            <span className="info-value">{formatCurrency(data.capital_social)}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Natureza Jurídica:</span>
                            <span className="info-value">{data.natureza_juridica || 'N/A'}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Porte:</span>
                            <span className="info-value">{data.porte || 'N/A'}</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Card;
