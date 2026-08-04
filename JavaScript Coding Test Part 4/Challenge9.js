function buildJsIfElseRunLaber(suitName, environment, buildNumber) {
    const newSuitName = suitName.trim();
    environment.toLowerCase();
    buildNumber = "build-" + buildNumber;
    const finalLabel = [newSuitName, environment, buildNumber];
    return (finalLabel.join(' | '));
}
