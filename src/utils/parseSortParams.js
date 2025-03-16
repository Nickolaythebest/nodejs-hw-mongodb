import { SORT_ORDER } from "../constants/index.js";

const parseSortOrder = (sortOrder) => {
    if (typeof sortOrder !== 'string') return SORT_ORDER.ASC;
    const normalizedOrder = sortOrder.toLowerCase();
    return normalizedOrder === 'desc' ? SORT_ORDER.DESC : SORT_ORDER.ASC;
};

const parseSortBy = (sortBy) => {
    const validFields = [
        '_id',
        'name',
        'phone', // Исправлено с phoneNumber
        'email',
        'isFavorite', // Исправлено с isFavourite
        'type', // Исправлено с contactType
    ];
    return validFields.includes(sortBy) ? sortBy : '_id';
};

export const parseSortParams = (query) => {
    const { sortOrder = 'asc', sortBy = '_id' } = query;
    return {
        sortOrder: parseSortOrder(sortOrder),
        sortBy: parseSortBy(sortBy),
    };
};
