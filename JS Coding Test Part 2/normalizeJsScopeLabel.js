function normalizeJsScopeLabel(label) {
  // write your code here
  newLabel = label.trim().toLowerCase()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, '');

  //return ("js-scope-"+newLabel);

  let result = "js-scope-" + newLabel;

  newLabel === '' ? result = result.slice(0, -1) : result;
  return result;
}