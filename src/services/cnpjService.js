const API_BASE_URL = 'https://brasilapi.com.br/api/cnpj/v1';

/**
 * Busca dados de um CNPJ na Brasil API
 * @param {string} cnpj - CNPJ sem formatação (apenas números)
 * @returns {Promise<Object>} Dados da empresa
 * @throws {Error} Se houver erro na requisição
 */
export async function fetchCNPJ(cnpj) {
    try {
        const response = await fetch(`${API_BASE_URL}/${cnpj}`);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('CNPJ não encontrado na base de dados.');
            }
            if (response.status === 429) {
                throw new Error('Muitas requisições. Aguarde um momento e tente novamente.');
            }
            throw new Error('Erro ao buscar dados do CNPJ. Tente novamente mais tarde.');
        }

        const data = await response.json();
        return formatCNPJData(data);
    } catch (error) {
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
            throw new Error('Erro de conexão. Verifique sua internet e tente novamente.');
        }
        throw error;
    }
}

/**
 * Formata os dados retornados pela API para melhor legibilidade
 * @param {Object} data - Dados brutos da API
 * @returns {Object} Dados formatados
 */
function formatCNPJData(data) {
    return {
        cnpj: formatCNPJDisplay(data.cnpj),
        razao_social: data.razao_social,
        nome_fantasia: data.nome_fantasia || 'Não informado',
        situacao_cadastral: data.descricao_situacao_cadastral,
        data_situacao_cadastral: data.data_situacao_cadastral,
        data_inicio_atividade: data.data_inicio_atividade,
        cnae_fiscal: data.cnae_fiscal,
        cnae_fiscal_descricao: data.cnae_fiscal_descricao,
        logradouro: data.logradouro,
        numero: data.numero,
        complemento: data.complemento,
        bairro: data.bairro,
        municipio: data.municipio,
        uf: data.uf,
        cep: formatCEP(data.cep),
        ddd_telefone_1: data.ddd_telefone_1,
        email: data.email || 'Não informado',
        capital_social: data.capital_social,
        natureza_juridica: data.natureza_juridica,
        porte: data.porte
    };
}

/**
 * Formata CNPJ para exibição
 * @param {string} cnpj - CNPJ sem formatação
 * @returns {string} CNPJ formatado
 */
function formatCNPJDisplay(cnpj) {
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
}

/**
 * Formata CEP para exibição
 * @param {string} cep - CEP sem formatação
 * @returns {string} CEP formatado
 */
function formatCEP(cep) {
    if (!cep) return 'N/A';
    return cep.replace(/^(\d{5})(\d{3})$/, '$1-$2');
}
