function buildPwBasicsTestName(feature: string, behavior: string): string {
    // write your code here
    const cleanfeature = feature.trim().replaceAll(/  */g, " ");
    const cleanbehaviour = behavior.trim().replaceAll(/  */g, " ");
    var newName = "";
    if (cleanbehaviour.length == 0) {
        newName = (`pw-basics: ${cleanfeature} - general`);
    } else if (cleanfeature.length == 0) {
        newName = (`pw-basics: general - ${cleanbehaviour}`);
    }
    else {
        newName = (`pw-basics: ${cleanfeature} - ${cleanbehaviour}`);
    }
    return (newName);
}