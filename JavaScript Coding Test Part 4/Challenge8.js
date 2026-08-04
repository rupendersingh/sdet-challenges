
function mergeJsIfElseConfig(defaultConfig, overrideConfig) {
    const finalConfig = { ...defaultConfig, ...overrideConfig, "retries": 0 };
    return (finalConfig);
}
