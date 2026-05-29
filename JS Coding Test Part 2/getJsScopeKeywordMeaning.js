function getJsScopeKeywordMeaning(term) {
    // write your code here
    term = term.trim().toLowerCase();
    let scopeMap = {
        "var": "function-scoped",
        "let": "block-scoped",
        "const": "block-constant"
    };

    if (term in scopeMap)
        return (scopeMap(term));
    else
        return ("unknown");
}