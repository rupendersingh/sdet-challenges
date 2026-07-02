function findFirstCriticalJsScopeBug(bugs) {
    // write your code here
    for (let i = 0; i < bugs.length; i++) {
        if (bugs[i].severity == "critical")
            return (bugs[i].title);
    }
    return ("No Critical bug");
}

console.log(findFirstCriticalJsScopeBug([{ "title": "Typo", "severity": "low" }, { "title": "Login crash", "severity": "critical" }]))