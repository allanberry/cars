/*
 * utilities.js
 */

module.exports = {
    slugify: function(text) {
        // hat tip https://gist.github.com/mathewbyrne/1280286
        return text.toString().toLowerCase().trim()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/&/g, '-and-')         // Replace & with 'and'
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+|-+$/g, '');       // remove leading, trailing -
    }
}