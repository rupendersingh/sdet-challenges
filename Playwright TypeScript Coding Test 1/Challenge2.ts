function selectPwBasicsLocatorStrategy(selector: string, hasRoleName: boolean, hasTestId: boolean): string {
    // write your code here
    if (hasRoleName == true) {
        return "getByRole"
    }
    if (hasTestId == true && hasRoleName == false) {
        return "getByTestId";
    }
    if (hasTestId == false && hasRoleName == false) {
        const patternXpath = /^[//]/;
        const patternCSS = /^[#.a-z]/;

        if (patternCSS.test(selector)) {
            return "CSS";
        } else if (patternXpath.test(selector)) {
            return "XPATH"
        }
    }
}
