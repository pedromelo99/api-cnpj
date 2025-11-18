import './Input.css';

function Input({
    label,
    value,
    onChange,
    placeholder,
    type = 'text',
    maxLength,
    error,
    onKeyPress
}) {
    return (
        <div className="input-container">
            {label && <label className="input-label">{label}</label>}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={maxLength}
                onKeyPress={onKeyPress}
                className={`input-field ${error ? 'input-error' : ''}`}
                aria-label={label}
                aria-invalid={error ? 'true' : 'false'}
            />
            {error && <span className="input-error-message">{error}</span>}
        </div>
    );
}

export default Input;
