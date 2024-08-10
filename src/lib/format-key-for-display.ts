export function formatKeyForDisplay(input: string) {
    let spacedString = input.replace(/([a-z])([A-Z])/g, '$1 $2');

    let formattedString = spacedString.toLowerCase();
    formattedString = formattedString.charAt(0).toUpperCase() + formattedString.slice(1);

    return formattedString;
}