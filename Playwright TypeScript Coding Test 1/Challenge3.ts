function buildPwBasicsRoleLocator(role: string, name: string): string {
    // write your code here
    const cleanRole = role.trim();
    let cleanName = name.trim();
    if (cleanName.length == 0) {
        cleanName = "Submit";
    }
    const locator: string = `page.getByRole('${cleanRole}', { name: '${cleanName}' })`;

    return locator;
}

console.log(buildPwBasicsRoleLocator(" textbox ", ""));
