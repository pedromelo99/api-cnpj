/**
 * Remove caracteres não numéricos do CNPJ
 * @param {string} cnpj - CNPJ com ou sem formatação
 * @returns {string} CNPJ apenas com números
 */
export function cleanCNPJ(cnpj) {
    return cnpj.replace(/\D/g, '');
}

/**
 * Formata CNPJ para o padrão XX.XXX.XXX/XXXX-XX
 * @param {string} cnpj - CNPJ sem formatação
 * @returns {string} CNPJ formatado
 */
export function formatCNPJ(cnpj) {
    const cleaned = cleanCNPJ(cnpj);

    if (cleaned.length <= 2) return cleaned;
    if (cleaned.length <= 5) return `${cleaned.slice(0, 2)}.${cleaned.slice(2)}`;
    if (cleaned.length <= 8) return `${cleaned.slice(0, 2)}.${cleaned.slice(2, 5)}.${cleaned.slice(5)}`;
    if (cleaned.length <= 12) {
        return `${cleaned.slice(0, 2)}.${cleaned.slice(2, 5)}.${cleaned.slice(5, 8)}/${cleaned.slice(8)}`;
    }
    return `${cleaned.slice(0, 2)}.${cleaned.slice(2, 5)}.${cleaned.slice(5, 8)}/${cleaned.slice(8, 12)}-${cleaned.slice(12, 14)}`;
}

/**
 * Valida CNPJ verificando dígitos verificadores
 * @param {string} cnpj - CNPJ com ou sem formatação
 * @returns {boolean} true se válido, false se inválido
 */
export function validateCNPJ(cnpj) {
    const cleaned = cleanCNPJ(cnpj);

    // Verifica se tem 14 dígitos
    if (cleaned.length !== 14) return false;

    // Verifica se todos os dígitos são iguais (inválido)
    if (/^(\d)\1+$/.test(cleaned)) return false;

    // Calcula o primeiro dígito verificador
    let sum = 0;
    let weight = 5;
    for (let i = 0; i < 12; i++) {
        sum += parseInt(cleaned.charAt(i)) * weight;
        weight = weight === 2 ? 9 : weight - 1;
    }
    let digit1 = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    // Verifica o primeiro dígito
    if (parseInt(cleaned.charAt(12)) !== digit1) return false;

    // Calcula o segundo dígito verificador
    sum = 0;
    weight = 6;
    for (let i = 0; i < 13; i++) {
        sum += parseInt(cleaned.charAt(i)) * weight;
        weight = weight === 2 ? 9 : weight - 1;
    }
    let digit2 = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    // Verifica o segundo dígito
    return parseInt(cleaned.charAt(13)) === digit2;
}
