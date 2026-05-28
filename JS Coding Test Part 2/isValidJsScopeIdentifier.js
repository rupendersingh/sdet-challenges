function isValidJsScopeIdentifier(name) {
    // write your code here
    name = name.trim().toLowerCase();
    let keywords = ['var', 'let', 'const', 'function', 'if', 'for'];
    if (keywords.includes(name))
        return false;

    let pattern = /^[$_a-z][$_a-z0-9]*$/;
    let validName = pattern.test(name);
    if (validName == true)
        return true;
    else
        return false;
}