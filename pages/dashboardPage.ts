import { expect, Page } from '@playwright/test';
import { dashboardLocators } from './locators';

export class dashboardPage {
  constructor(private page: Page) {}

  async verifyLogin() {
    await this.page.waitForSelector('h6:has-text("Dashboard")');
  }

  async addEmployee(firstName : string , middleName: string, lastName : string){
    await this.page.click(dashboardLocators.pimButton);
    await this.page.click(dashboardLocators.addEmpButton);
    await this.page.fill(dashboardLocators.firstNameTxtBox, firstName);
    await this.page.fill(dashboardLocators.middleNameTxtBox, middleName);
    await this.page.fill(dashboardLocators.lastNameTxtBox, lastName);
    await this.page.click(dashboardLocators.saveButton)
    await this.page.pause();
    const fullName = await this.page.locator(dashboardLocators.dynamicName(firstName,lastName)).textContent();
    await this.page.waitForTimeout(2000);
    await expect(fullName).toBe(firstName+" "+lastName);

  }

  
}