function filterSupportedJsIfElseTopics(topics) {
    // write your code here
    const aliasObject = {
        "success": "success",
        "2xx": "success",
        "redirect": "redirect",
        "3xx": "redirect",
        "client": "4xx",
        "4xx": "client"
    }
    cleanTopics = [];
    for (ch of topics) {
        ch = ch.trim().toLowerCase();
        console.log(ch);
        if (!aliasObject[ch]) {
            continue;
        }
        else {
            cleanTopics.push(aliasObject[ch]);
        }
    }
    cleanTopics = cleanTopics.filter((topic, index) => cleanTopics.indexOf(topic) === index);
    return (cleanTopics);
}

filterSupportedJsIfElseTopics(["SUCCESS", "2xx", "unknown"]);