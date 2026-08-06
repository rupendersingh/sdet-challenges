function buildPwBasicsRoleLocator(role: string, name: string): string {
    // write your code here
    const cleanRole = role.trim();
    const cleanName = name.trim();
    const locator: string = `page.getByRole('${cleanRole}', { name: '${cleanName}' })`;

    return locator;
}

console.log(buildPwBasicsRoleLocator(" textbox ", " Email Address "));
