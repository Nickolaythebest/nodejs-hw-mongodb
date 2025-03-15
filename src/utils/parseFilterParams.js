

const parseType = (contactType) => {
    const isString = typeof contactType === 'string';
    if(!isString) return;
    const isType = (contactType) => ['work', 'home', 'personal'].includes(contactType);
    if(isType(contactType)) return contactType;
};

const parseNumber = (number) => {
    const isString = typeof number === 'string';
    if(!isString) return;

    const parsedNumber = parseInt(number);
    if(Number.isNaN(parsedNumber)) {
        return;
    }
    return parsedNumber;
};

export const parseFilterParams = (query) => {
    const {type, name, phoneNumber, email, isFavorite} = query;

    const parseContactType = parseType(type);
    const parseName = parseNumber(name);
    const parsePhoneNumber = parseNumber(phoneNumber);
    const parseEmail = parseNumber(email);
    const parseIsFavorite = parseNumber(isFavorite);

    return {
        type: parseContactType,
        name: parseName,
        phoneNumber: parsePhoneNumber,
        email: parseEmail,
        isFavorite: parseIsFavorite,
    };
};