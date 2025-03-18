

const parseType = (contactType) => {
    const validTypes = ['work', 'home', 'personal'];
    return validTypes.includes(contactType) ? contactType : undefined;
};


const parseBoolean = (value) => {
    if (typeof value === 'boolean') {
        return value;
    }
    if (typeof value === 'string') {
        return value.toLowerCase(value);
    }
    return undefined;
};

export const parseFilterParams = (query) => {
    const {contactType, isFavorite} = query;

    const parseContactType = parseType(contactType);
    const parseIsFavorite = parseBoolean(isFavorite);


    return {
        contactType: parseContactType,
        isFavorite: parseIsFavorite,
    };
};