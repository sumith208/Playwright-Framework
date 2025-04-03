import { expect, Page } from '@playwright/test';
import { loginLocators , dashboardLocators} from './locators';

export class loginPage{
    
    constructor(private page : Page){
        
    }

    async navigate(){
        await this.page.goto('/');
    }

    async login(username : string, pwd: string){
        await this.page.fill(loginLocators.userNameInput,username);
        await this.page.fill(loginLocators.pwdInput,pwd);
        await this.page.click(loginLocators.loginBtn);
        

    }

    async invalidError(){
        return await this.page.locator(loginLocators.errorMessageText).textContent();
    }


}