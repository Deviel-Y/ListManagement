// Truncates text to prevent it from being displayed in full.
export const truncateText = (text: string): string => {
 const limit: number = 50;

 const truncatedText: string = `${text.substring(0, limit)}...`;

 return text.length > limit ? truncatedText : text;
};
