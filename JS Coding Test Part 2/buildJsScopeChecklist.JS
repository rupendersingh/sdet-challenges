function buildJsScopeChecklist(items) {
    // ADD YOUR CODE HERE
    result = [];
    count = 0;
    for (item of items) {
        item = item.trim();
        if (item != "")
            result[count] = (count + 1) + ". " + item + " - TODO";
        count += 1;
    }
    return result;
}