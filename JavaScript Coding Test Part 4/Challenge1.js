
let label = "---Search@@Box---";
normalizeJsIfElseLabel(label);
function normalizeJsIfElseLabel(label) {
    // write your code here
    label = label.trim().toLowerCase();
    const pattern = /[^a-zA-Z0-9]/g;
    let newLabel = "js-ifelse-" + label;
    let finalLabel = newLabel.replaceAll(pattern, "-")
        .replaceAll(/--*/g, "-")
        .replaceAll(/^-*|-*$/g, "");
    console.log(finalLabel);
}

