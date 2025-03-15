import { SORT_ORDER } from "../constants/index.js";

const parseSortOrder = (sortorder) => {
    const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortorder);
    if(isKnownOrder) return sortorder;
    return SORT_ORDER.ASC;
};

const parseSortBy = (sortBy) => {
    const keyOfContacts = [
        '_id',
        'name',
        'phoneNumber',
        'email',
        'isFavourite',
        'contactType',
    ];
    if(keyOfContacts.includes(sortBy)) {
        return sortBy;
    }
    return '_id';
};
export const parseSortParams = (query) => {
    const {sortorder, sortBy} = query;

    const parsedSortOrder = parseSortOrder(sortorder);
    const parsedSortBy = parseSortBy(sortBy);

    return {
        sortorder: parsedSortOrder,
        sortBy: parsedSortBy,
    };
};