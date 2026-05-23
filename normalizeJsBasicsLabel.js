function normalizeJsBasicsLabel(label) {
  // write your code here
  let newLabel = (label.trim()).toLowerCase()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, '');

let result = "js-basic-"+ newLabel;

newLabel === '' ? result = result.slice(0, -1) : result;
return result;
}