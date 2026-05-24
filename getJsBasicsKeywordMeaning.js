

function getJsBasicsKeywordMeaning(term) {
    // write your code here
    let value = (term.trim()).toLowerCase();
    const termsObject = {
        node: "runtime",
        v8: "engine",
        npm: "package-manager"
    };

    if (termsObject[value] == undefined)
        return "unknown";
    else
        return termsObject[value];
}