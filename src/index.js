module.exports = function toReadable (number) {
   const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 10) return ones[number];
    if (number >= 11 && number < 20) return teens[number - 11];
    if (number >= 10 && number < 100) return getTens(number);
    if (number >= 100 && number < 1000) return getHundreds(number);

    function getTens(num) {
        if (num % 10 === 0) return tens[Math.floor(num / 10) - 1];
        return `${tens[Math.floor(num / 10) - 1]} ${ones[num % 10]}`;
    }

    function getHundreds(num) {
        const hundredPart = ones[Math.floor(num / 100)] + ' hundred';
        const remainder = num % 100;
        if (remainder === 0) return hundredPart;
        if (remainder < 10) return hundredPart + ' ' + ones[remainder];
        if (remainder >= 11 && remainder < 20) return hundredPart + ' ' + teens[remainder - 11];
        return `${hundredPart} ${getTens(remainder)}`;
    }
}
