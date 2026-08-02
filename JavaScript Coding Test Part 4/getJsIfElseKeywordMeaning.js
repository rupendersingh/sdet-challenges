function getJsIfElseKeywordMeaning(term) {
    // write your code here
    const keywords = {
        "success": "2xx",
        "redirect": "3xx",
        "client": "4xx",
        "not-a-topic": "unknown"
    }

    term = term.trim().toLowerCase();
    return (keywords[term]);
}