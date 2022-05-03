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

export const validateUrl = (value) => {
    let error;
    if (value.length === 0) { return error }
    if (!/^[A-Z0-9._%+-]+\.[A-Z0-9/._-]{2,1000}$/i.test(value)) {
        error = "Invalid url";
    }
    return error;
}