function summarizeJsScopeResults(results) {
    // write your code here
    for (let x in results) {
        x = x.trim().toLowerCase();
    }

    let pass = results.filter(words => words.includes("pass")).length;
    let fail = results.filter(words => words.includes("fail")).length;
    let skip = results.filter(words => words.includes("skip")).length;

    return ({ "total": (pass + fail + skip), "passed": pass, "failed": fail, "skipped": skip });
}