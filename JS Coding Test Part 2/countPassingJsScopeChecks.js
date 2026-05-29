function countPassingJsScopeChecks(results) {
    // write your code here
    for (i = 0; i < results.length; i++) {
        results[i] = results[i].trim().toLowerCase();
    }
    passCount = results.filter(word => word.includes("pass")).length;
    return passCount;
}

console.log(countPassingJsScopeChecks(["login-pass", "api-fail", "logout-pass"]));