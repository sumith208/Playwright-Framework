import {test, expect} from '@playwright/test'
import { dashboardPage } from '../pages/dashboardPage'
import { dashboardLocators } from '../pages/locators'
import { loginPage } from '../pages/loginPage'

test.describe('Employee Tests', () =>{

    test.beforeEach(async({page}) =>{
        const login = new loginPage(page);
        const dashboard = new dashboardPage(page);
        await login.navigate();
        await login.login("Admin","admin123");
        // await dashboard.verifyLogin();
    })

    test('Add Employee' , async({page}) => {
        const dashboard = new dashboardPage(page);
        await dashboard.addEmployee("Sumith","Amin","N")
        
    })
})