export const isRequired = (value) => {
    return value ? undefined : 'Field is required'
}

export const maxLength = (max) => (value) => {
    return value && value.length > max ? `Must be ${max} characters or less` : undefined
}

export const minLength = (min) => (value) => {
    return value && value.length < min ? `Must be ${min} characters or more` : undefined
}