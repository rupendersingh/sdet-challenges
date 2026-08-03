function summarizeJsIfElseResults(results) {
    let pass = 0;
    let fail = 0;
    let skip = 0;
    let total = 0;
    for (ch of results) {
        ch.trim().toLowerCase();
        if (ch.includes("pass")) { pass += 1; }
        else if (ch.includes("fail")) { fail += 1; }
        else if (ch.includes("skip")) { skip += 1; }
    }
    total = (pass + fail + skip);
    console.log(`"{total":${total},"passed":${pass},"failed":${fail},"skipped":${skip}}`);
}
results = ["login-pass", "test-skip", "logout-fail"];
summarizeJsIfElseResults(results);