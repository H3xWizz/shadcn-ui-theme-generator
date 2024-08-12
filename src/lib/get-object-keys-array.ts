export const getObjectKeysArray = (obj: Record<string, string | number>) => {
    return Object.keys(obj).map(key => key);
};