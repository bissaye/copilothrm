export const getWordsWithMinSize = (
    string: string, 
    nbr_wrd: number, 
    size_wrd: number
): string[] => {

    const words = string.split(' ');
    
    const result = words.slice(0, nbr_wrd).map(word => {

        if (word.length > size_wrd) {
            return word.substring(0, size_wrd) + '...';
        }
        return word;
    });
    
    return result;
}
