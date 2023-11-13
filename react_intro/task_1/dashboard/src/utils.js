/* util.js */
/* Function to get the current year and index status */

export const getFullYear = () => new Date().getFullYear();
export const getFooterCopy = (isIndex) => {
    if (isIndex) {
        return 'Holberton School';
    } return 'Holberton School main dashboard';
}