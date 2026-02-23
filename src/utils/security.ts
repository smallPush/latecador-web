/**
 * Escapes HTML special characters in a string for use in Telegram HTML parse mode.
 * Telegram requires escaping of <, >, and & symbols.
 * @see https://core.telegram.org/bots/api#html-style
 */
export const escapeHtml = (text: string): string => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};
