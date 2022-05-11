export const isRequired = (value, lang) => {
    let error = 'Field is required';
    lang === 'ru' && (error = 'Обязательное поле')
    return value ? undefined : error
}

export const isRequiredNoError = (value) => {
    return value ? undefined : " ";
};

export const maxLength = (max) => (value, lang) => {
    let error = null;
    value && value.length > max && (error = `Must be ${max} characters or less`)
    value && value.length > max && lang === 'ru' && (error = `Максимальная длина строки - ${max} символов`)
    return error
}

export const minLength = (min) => (value, lang) => {
    let error = null;
    value && value.length < min && (error = `Must be ${min} characters or less`)
    value && value.length < min && lang === 'ru' && (error = `Минимальная длина строки - ${min} символов`)
    return error;
}

export const validateEmail = (value, lang) => {
    let error;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = "Invalid Email address";
        lang === 'ru' && (error = 'Некорректный Email адрес')
    }
    return error;
};

export const validateUrl = (value, lang) => {
    let error;
    if (value.length === 0) { return error }
    if (!/^[A-Z0-9._%+-]+\.[A-Z0-9/._-]{2,1000}$/i.test(value)) {
        error = "Invalid URL";
        lang === 'ru' && (error = 'Некорректный URL адрес')
    }
    return error;
}