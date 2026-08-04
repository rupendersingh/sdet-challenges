function summarizeJsIfElseMatriz(matrix) {
    const output = { "total": 0, "passed": 0, "failed": 0, "failedCases": [] };
    const newmatrix = matrix.flat();
    for (item of newmatrix) {
        if (item.includes("pass")) {
            output.passed += 1;
        } else if (item.includes("fail")) {
            output.failed += 1;
            output.failedCases.push(item);
        }
    }
    output.total = output.passed + output.failed;
    return output;
}