function countPassingJsIfElseChecks(results) {
    var count = 0;
    for (ch of results) {
        ch.trim().toLowerCase();
        if (ch.includes("pass")) {
            count += 1;
        }
    }
    return count;
}

countPassingJsIfElseChecks(["api-fail", "logout-fail"]);