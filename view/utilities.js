/*
 * utilities.js
 */

module.exports = {
    slugify: function(str) {
        // hat tip https://gist.github.com/mathewbyrne/1280286
        return str.toString().toLowerCase().trim()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/&/g, '-and-')         // Replace & with 'and'
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+|-+$/g, '');       // remove leading, trailing -
    },
    toTitleCase: function(str) {
        // hat tip http://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript#answer-196991
        return str.replace(/\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
            }
        )
    }
}