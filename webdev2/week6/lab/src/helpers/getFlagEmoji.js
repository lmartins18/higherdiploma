// REFERENCE: https://dev.to/jorik/country-code-to-flag-emoji-a21
export default function getFlagEmoji(countryCode) {
    if (countryCode) {
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map(char => 127397 + char.charCodeAt());
        return String.fromCodePoint(...codePoints);
    }
}