
let name = "loginButton";
isValidJsIfElseIdentifier(name);
function isValidJsIfElseIdentifier(name) {
    // write your code here
    name = name.trim();
    let pattern = /^[a-zA-Z$_]+[a-zA-Z0-9$_]$/g;
    let validName = pattern.test(name);
    if (name == "if" || name == "else" || name == "return" || name == "true" || name == "false" || name == "null") {
        return false;
    }
    console.log(validName);
}