

const parseType = (contactType) => {
    if (typeof contactType !== 'string') return undefined;
    const validTypes = ['work', 'home', 'personal'];
    return validTypes.includes(contactType) ? contactType : undefined;
};

const parseBoolean = (value) => {
    if (typeof value === 'string') {
        return value.toLowerCase() === 'true';
    }
    return undefined;
};

export const parseFilterParams = (query) => {
    const {contactType, isFavorite} = query;

    const parseContactType = parseType(contactType);
    const parseIsFavorite = isFavorite !== undefined ? parseBoolean(isFavorite) : undefined;

    return {
        type: parseContactType,
        isFavorite: parseIsFavorite,
    };
};