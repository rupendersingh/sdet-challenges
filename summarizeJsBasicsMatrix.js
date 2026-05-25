function summarizeJsBasicsMatrix(matrix) {
    // write your code here
    let pass = 0;
    let fail = 0;
    let failedCase = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j].includes("pass"))
                pass += 1;
            else {
                fail += 1;
                failedCase = matrix[i][j];
            }
        }
    }

    return ({ "failed": fail, "failedCases": failedCase, "passed": pass, "total": pass + fail });
}