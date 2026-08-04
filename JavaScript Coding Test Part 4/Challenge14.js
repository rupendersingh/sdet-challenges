
function buildJsIfElseChecklist(items) {
    var count = 1;
    var tasks = [];
    for (item of items) {
        const newitem = item.trim();
        if (newitem.length > 0) {
            const str = `${count}. ${newitem} - TODO`;
            tasks.push(str);
            count += 1;
        }
    }
    return tasks;
}
