function filterSupportedJsBasicsTopics(topics) {
    // write your code here
    const aliasMap = {
        "node": "node",
        "runtime": "node",
        "v8": "v8",
        "npm": "npm"
    };

    let canonical = [];

    for (i = 0; i < topics.length; i++) {
        label = topics[i].trim().toLowerCase();
        aliasValue = aliasMap[label];
        //console.log(aliasValue);
        if (aliasValue == undefined)
            continue;
        else if (canonical.includes(aliasValue))
            continue;
        else
            canonical.push(aliasValue);
    }
    return canonical;
}

console.log(filterSupportedJsBasicsTopics(["node", "npn", "    V8"]));