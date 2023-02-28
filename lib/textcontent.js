class textContent {
    constructor(text, color) {
        if (text.length < 3) {
            throw new Error('title must contain at least 3 characters.');
        }

        if (/^#[0-9A-F]{6}$/i.test(color)) {
            throw new Error(`Invalid color input "${color}"! Please enter a valid hex color code.`);
        }
        this.text = text;
        this.color = color
    }
}

module.exports = textContent;