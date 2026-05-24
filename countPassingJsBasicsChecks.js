function countPassingJsBasicsChecks(results) {
    // write your code here
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].trim().toLowerCase();
    }
    let count = results.filter(word => word.includes("pass")).length;

    return count;
}