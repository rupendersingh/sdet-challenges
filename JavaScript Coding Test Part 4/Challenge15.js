function calculateJsIfElseWeightedScore(passed, failed, skipped) {
    // write your code here
    const total = (passed * 2) - failed;
    return total;
}