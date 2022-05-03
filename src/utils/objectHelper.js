export const isAnyValuesInObj = (obj) => {
    let hasValues = false;
    Object.values(obj).forEach((value) => {
        if (value) return (hasValues = true);
    });
    return hasValues;
};