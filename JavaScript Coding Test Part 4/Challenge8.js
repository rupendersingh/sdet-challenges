
function mergeJsIfElseConfig(defaultConfig, overrideConfig) {
    const finalConfig = { "retries": 0, ...defaultConfig, ...overrideConfig };
    return (finalConfig);
}
