class Screener {
    private filterbtn: string = 'button[data-testid="filter-menu-btn"]';
    private screenerfilteroptions: string = '.css-c1nl7p div[role="button"]';
    private headcountrangedropdown: string = '.css-10wwmqn';
    private headcountrange: string = '.css-1a0p5sj div[role="button"]';
    private isbetween: string = '.css-70qvj9 input';
    private lessgreaterinput: string = '.css-70qvj9';
    private addbtn: string = 'button[data-testid="filter-popover-submit"]';
    private industryoptions: string = 'div[style="height: 528px; width: 100%;"] div[role="group"]';
    private industrysearchoptions: string = 'div[style="height: 24px; width: 100%;"] div[role="group"]';
    private searchindustry: string = 'input[placeholder="Search..."]';

    selectIndustry(industry: string): void {
        const industries = [
            'Other', 'Non-Energy Minerals', 'Producer Manufacturing', 'Electronic Technology', 'Consumer Durables',
            'Energy Minerals', 'Process Industries', 'Health Technology', 'Consumer Non-Durables', 'Industrial Services',
            'Commercial Services', 'Distribution Services', 'Technology Services', 'Health Services', 'Consumer Services',
            'Retail Trade', 'Transportation', 'Utilities', 'Finance', 'Communications', 'Miscellaneous', 'Government'
        ];
    
        const index = industries.indexOf(industry);
        if (index !== -1) {
            
    
            if (index > 9) {
                cy.get(this.searchindustry).type(industry);
                cy.get(this.industrysearchoptions).eq(0).click();
            }
            else{
                cy.get(this.industryoptions).eq(index).click();
            }
            
        } else {
            throw new Error('Invalid industry provided.');
        }
    }
    

    setrangeandvalue(range: string, amount: number | [number, number]): void {
        cy.get(this.headcountrangedropdown).click();
        const ranges = ['is between', 'is greater than', 'is less than'];
        const index = ranges.indexOf(range);
    
        if (index !== -1) {
            cy.get(this.headcountrange).eq(index).click();
            
            if (range === 'is between') {
                if (Array.isArray(amount) && amount.length === 2) {
                    cy.get(this.isbetween).eq(0).clear().type(amount[0].toString());
                    cy.get(this.isbetween).eq(1).clear().type(amount[1].toString());
                } else {
                    throw new Error('For "is between" range, amount should be an array with two numbers.');
                }
            } else {
                if (typeof amount === 'number') {
                    cy.get(this.lessgreaterinput).clear().type(amount.toString());
                } else {
                    throw new Error('For "is greater than" and "is less than" ranges, amount should be a single number.');
                }
            }
        }
    }

    selectscreenerfilteroption(filter: string): void {
        const filters = [
            'Industry','Headcount', 'Hiring Rate', 'Attrition Rate', 'Growth Rate', 'Average Salary'
        ];
        const index = filters.indexOf(filter);
        if (index !== -1) {
            cy.get(this.screenerfilteroptions).eq(index).click();
        }
    }

    clickfilter(): void{
        cy.get(this.filterbtn).click();
    }

    clickadd(): void {
        cy.get(this.addbtn).click();
    }
}
export default Screener;