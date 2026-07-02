function normalizeTsBasicsLabel(label: string): string {
    // write your code here
    let newlabel = label.trim().toLowerCase();
    newlabel.replace(/[^a-z0-9]+/gi, "-");
    let result = "ts-basic-" + newlabel;

    newlabel === '' ? result = result.slice(0, -1) : result;
    return result;
}