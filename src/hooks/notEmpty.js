export const useNotEmpety = (data, requiredFields) => {
    const errors = requiredFields.filter((field) => {
        if(!data[field] || data[field].length <= 0) {
            return field;
        }
    });

    return errors
}