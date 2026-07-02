function createUniqueJsScopeTags(tags) {
    // write your code 
    newtags = new Set(tags);
    labels = new Set()
    for (let i = 0; i < tags.length; i++) {
        let normalized = tags[i].trim().toLowerCase();
        if (normalized)
            labels.add(normalized);
    }
    return (Array.from(labels))
}

console.log(createUniqueJsScopeTags([" Smoke ", "", "Regression"]))