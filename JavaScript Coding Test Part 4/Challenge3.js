function classifyJsIfElseScore(score) {
    // write your code here
    if (score >= 90) { console.log('"EXCELLENT"') }
    else if (score >= 75 && score <= 89) { console.log('"GOOD"') }
    else if (score >= 50 && score <= 74) { console.log('"NEEDS_PRACTICE"') }
    else { console.log('"REVISIT"') }
};
