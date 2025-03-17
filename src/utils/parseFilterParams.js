

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
    const { type, isFavourite } = query;

    const parsedContactType = parseType(type);
    const parsedIsFavourite = isFavourite !== undefined ? parseBoolean(isFavourite) : undefined;

    const filter = {};
    if (parsedContactType) {
        filter.contactType = parsedContactType;
    }
    if (typeof parsedIsFavourite === 'boolean') {
        filter.isFavourite = parsedIsFavourite;
    }

    return filter;
};
