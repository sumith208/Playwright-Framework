export const loginLocators = {
    userNameInput : '[name="username"]',
    pwdInput : '[name="password"]',
    loginBtn : '//button[text()=" Login "]',
    errorMessageText : '//p[text()="Invalid credentials"]'

}

export const dashboardLocators ={
    // adminBtn : '//span[text()="Admin"]',
    // dashboadtext : '//h6[text()="Dashboard"]',
    // empNameInput : '//input[@placeholder="Type for hints..."]',
    // userNameInput : "(//label[text()='Username']/following::input)[1]",
    // pwdInput : "(//label[text()='Username']/following::input)[2]",
    // confirmPwdInput : "(//label[text()='Username']/following::input)[3]",
    // userRoleDrpDown : '(//div[text()="-- Select --"])[1]',
    // statusDrpDown : '(//div[text()="-- Select --"])[2]',
    // addButton : '//button[text()=" Add "]'
    pimButton : '//span[text()="PIM"]' ,
    addEmpButton : '//a[contains(text(),"Add Employee")]',
    firstNameTxtBox : '[name="firstName"]',
    middleNameTxtBox : '[name="middleName"]',
    lastNameTxtBox : '[name="lastName"]',
    saveButton : '//button[text()=" Save "]',
    dynamicName : (firstName : string, lastName : string) => `//h6[text() = "${firstName} ${lastName}"]`

}