function filterSupportedJsScopeTopics(topics) {
    // write your code here
    let aliasMap = new Map([
        ["function-scoped", "var"],
        ["let", "let"],
        ["const", "const"],
        ["var", "var"]
    ]);
    let canonical = [];
    //let aliasKeys = aliasMap.keys();
    for (let i = 0; i < topics.length; i++) {
        let label = topics[i].trim().toLowerCase();
        let aliasValue = aliasMap.get(label);

        if (aliasValue == undefined)
            continue;
        else if (canonical.includes(aliasValue))
            continue;
        else
            canonical.push(aliasValue);
    }
    return canonical;
}

console.log(filterSupportedJsScopeTopics(["VAR", " let ", "unknown"]));