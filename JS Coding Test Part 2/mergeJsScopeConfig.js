function mergeJsScopeConfig(defaultConfig, overrideConfig) {
    // write your code here
    finalconfig = { ...defaultConfig, ...overrideConfig };
    if (!("retries" in finalconfig)) {
        finalconfig = { ...{ "retries": 0 } };
    }
    return finalconfig
}
