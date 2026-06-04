function buildJsScopeRunLabel(suiteName, environment, buildNumber) {
    // write your code here
    suiteName = suiteName.trim();
    environment = environment.trim().toLowerCase();

    return (suiteName + " | " + environment + " | " + "build-" + buildNumber);
}