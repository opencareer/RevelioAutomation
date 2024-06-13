// PageClass/Login.ts
class Login {
    private loginbtn: string = ".flex > .py-2";    
    private usernametxt: string = "input[name='email']";
    private passwordtxt: string = "input.css-1m1jcbl";
    private signInbtn: string = "button.css-1bca5fv";
    private dashboardbtn: string = '.flex.items-center.justify-end a[href="https://dashboard.reveliolabs.com"]';
    private freetrialbtn: string = 'Free Trial';
    private signupbtn: string = "button[type='submit']";
    private nametxt: string = 'input[placeholder="Name*"]';
    private companynametxt: string = 'input[placeholder="Company Name*"]';
    private jobtitletxt : string = 'input[placeholder="Job Title*"]';
    private hearddropdown: string = 'input[placeholder="Name*"]';
    private coninuebtn: string = 'Continue';
    
    clickLogin(): void {
        cy.get(this.loginbtn).click();
    }

    setUserEmail(username: string): void {
        cy.wait(2000);
        cy.get(this.usernametxt).click().type(username);
    }

    setPassword(password: string): void {
        cy.get(this.passwordtxt).click().type(password);
    }

    clickLoginbtn(): void {
        cy.get(this.signInbtn).click();
    }

    clickDashboard(): void {
        
        cy.get(this.dashboardbtn, { timeout: 20000 }).should('be.visible').click();
    }

    clickfreeTrial(): void{
        cy.contains(this.freetrialbtn).click();
    }
    clickSignup(): void {
        cy.get(this.signupbtn).click();
    }
    setname(name: string): void {
        cy.get(this.nametxt).click().type(name);
    }
    setcompanyname(companyname: string): void {
        cy.get(this.companynametxt).click().type(companyname);
    }
    setjobtitle(jobtitle: string): void {
        cy.get(this.jobtitletxt).click().type(jobtitle);
    }
    clickcontinue(): void{
        cy.contains(this.coninuebtn).click();
    }


}


export default Login;
