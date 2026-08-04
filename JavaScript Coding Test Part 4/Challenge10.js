function findFirstCriticalJsIfElseBug(bugs) {
    for (item of bugs) {
        if (item.severity == "critical") {
            return item.title;
        }
    }
    return ("No critical bug");
}