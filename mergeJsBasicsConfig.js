function mergeJsBasicsConfig(defaultConfig, overrideConfig) {
    // write your code here
    let defaultKeys = Object.keys(defaultConfig);
    let overrideKeys = Object.keys(overrideConfig);
    let retry = 0;

    let countDefaultRetry = defaultKeys.filter(value => value.includes("retries")).length;
    let countOverideRetry = overrideKeys.filter(value => value.includes("retries")).length;

    if (countDefaultRetry > 0 && countOverideRetry === 0)
        retry = defaultConfig.retries;
    else if (countOverideRetry > 0 && overrideConfig.retries > retry)
        retry = overrideConfig.retries;

    const finalObject = { ...defaultConfig, ...overrideConfig, "retries": retry };

    return finalObject;
}
const defaultConfig = {
    "env": "qa",
};

const overrideConfig = {
    "timeout": 5000
};

console.log(mergeJsBasicsConfig(defaultConfig, overrideConfig));
