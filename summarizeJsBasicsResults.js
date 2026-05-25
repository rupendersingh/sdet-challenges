function summarizeJsBasicsResults(results) {
    // write your code here
    for (let result in results) {
        result = result.trim().toLowerCase();
    }

    let pass = results.filter(word => word.includes("pass")).length;
    let fail = results.filter(word => word.includes("fail")).length;
    let skip = results.filter(word => word.includes("skip")).length;

    let total = pass + fail + skip;
    return {
        "total": total,
        "passed": pass,
        "failed": fail,
        "skipped": skip
    };
}

console.log(summarizeJsBasicsResults((["login-pass", "api-fail", "profile-skip"])));