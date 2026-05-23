function isValidJsBasicsIdentifier(name) {
  name = name.trim();
  const keywordList = new Set(['let', 'const', 'var', 'class', 'function', 'return']);
  if (keywordList.has(name))
    return false

  let pattern = /^[$_a-zA-Z][$_a-zA-Z0-9]*$/;
  let validName = pattern.test(name);
  if (validName == true)
    return true;
  else
    return validName;
}
