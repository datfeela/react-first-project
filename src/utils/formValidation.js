export const isRequired = (value) => {
    return value ? undefined : 'Field is required'
}

export const isRequiredNoError = (value) => {
    return value ? undefined : " ";
};

export const maxLength = (max) => (value) => {
    return value && value.length > max ? `Must be ${max} characters or less` : undefined
}

export const minLength = (min) => (value) => {
    return value && value.length < min ? `Must be ${min} characters or more` : undefined
}

export const validateEmail = (value) => {
    let error;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = "Invalid email address";
    }
    return error;
};