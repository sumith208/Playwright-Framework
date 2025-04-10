import {test,expect} from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { log } from 'console';
import { dashboardPage } from '../pages/dashboardPage';

test.describe('login tests',()=>{
    test('Valid Login',async({page})=>{
        const login = new loginPage(page);
        const dashboardPg = new dashboardPage(page);
        await login.navigate();
        await login.login("Admin","admin123");
        await page.waitForTimeout(3000);
        // dashboardPg.verifyLogin();   
    })

    test("Invalid Login",async({page}) => {
        const login = new loginPage(page);
        await login.navigate();
        await login.login("Admin","admin13");
        const errorMsg = await login.invalidError();
        expect(errorMsg).toBe("Invalid credentials");
        await page.waitForTimeout(3000);
    })
})