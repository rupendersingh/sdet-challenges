
function createUniqueJsIfElseTags(tags) {

    const uniqueTags = new Set();
    for (tag of tags) {
        const cleantag = tag.trim().toLowerCase();
        if (cleantag.length > 0) {
            uniqueTags.add(cleantag);
        }
    }

    return (uniqueTags);
}