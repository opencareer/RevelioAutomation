import Company from "./Companyobjects";

class Talentdiscovery{
    private filterbtn: string = 'button[data-testid="filter-menu-btn"]';
    private filteroptions: string = '.css-5prw7p div[role="button"]';
    private searchbtn: string = '.css-1f3vsfb';
    private selectamazon: string = 'div[data-testid="Amazon.com, Inc._tree_item"]';
    private addbtn: string = 'button[data-testid="filter-popover-submit"]';
    private educationoptions: string = 'div[style="height: 144px; width: 100%;"] div[role="group"]';
    private ethnicityoptions: string = 'div[style="height: 144px; width: 100%;"] div[role="group"]';
    private flightriskoptions: string = 'div[style="height: 72px; width: 100%;" ] div[role="group"]';
    private genderoptions: string = 'div[style="height: 48px; width: 100%;"] .css-9nud46';
    private nametextbox: string = 'input[placeholder="Search for a name"]';
    private prestigeoptions: string = 'div[style="height: 72px; width: 100%;"] div[role="group"]';
    private remotesuitabilityoptions : string = 'div[style="height: 72px; width: 100%;"] div[role="group"]';
    private roleoptions: string = 'div[style="height: 168px; width: 100%;"] div[role="group"]';
    private seniorityoptions: string = 'div[style="height: 168px; width: 100%;"] div[role="group"]';
    private payrangedropdown: string = '.css-8atqhb';
    private payrange: string = '.css-1a0p5sj div[role="button"]';
    private isbetween: string = '.css-1bntj9o input';
    private lessgreaterinput: string = '.css-1bntj9o';
    private keywordtxt: string = '.css-10wwmqn';
    private arrows: string = '.gutter-col .css-pet1id';
    private hoverfirstrow: string = '.InovuaReactDataGrid__row--first';
    private Managecolumnbtn: string = 'button[aria-label="Manage Columns"]';
    private selectcolumnoptions: string = '.css-988d0d label';
    private savebtn = 'button[type="submit"]';

    clicksave(): void {
        cy.get(this.savebtn).click()
    }

    checkcolumns(options: string[]): void {
        options.forEach(option => {
            cy.get(this.selectcolumnoptions).contains(option).click();
        });
    }

    clickmanagecolumn(): void {
        cy.get(this.Managecolumnbtn).click();
    }

    Hover(): void {
        cy.get(this.hoverfirstrow).trigger('mouseover')
    }

    clickarrow( direction : string ): void {
        cy.wait(5000);
        if (direction === 'Left')
            {
                cy.get(this.arrows).eq(0).click();
            }
            else if (direction === 'Right') {
                cy.get(this.arrows).eq(1).click();
            }
            
    }

    setkeyword(keyword: string[] ): void {

        cy.get(this.keywordtxt).type(`${keyword} ,`);
        cy.get('.css-1ipyiix').click();

    }

    selectpay(range: string, amount: number | [number, number]): void {
        cy.get(this.payrangedropdown).click();
        const ranges = ['is between', 'is greater than', 'is less than'];
        const index = ranges.indexOf(range);
    
        if (index !== -1) {
            cy.get(this.payrange).eq(index).click();
            
            if (range === 'is between') {
                if (Array.isArray(amount) && amount.length === 2) {
                    cy.get(this.isbetween).eq(0).type(amount[0].toString());
                    cy.get(this.isbetween).eq(1).clear().type(amount[1].toString());
                } else {
                    throw new Error('For "is between" range, amount should be an array with two numbers.');
                }
            } else {
                if (typeof amount === 'number') {
                    cy.get(this.lessgreaterinput).type(amount.toString());
                } else {
                    throw new Error('For "is greater than" and "is less than" ranges, amount should be a single number.');
                }
            }
        }
    }
    

    selectseniority(seniority: string ): void {
        const seniorities= ['Entry Level', 'Junior', 'Associate', 'Manager', 'Director', 'Executive', 'Senior Executive'];
        const index = seniorities.indexOf(seniority);
        if (index !== -1) {
            cy.get(this.seniorityoptions).eq(index).click();
        }
    }

    selectroles(role: string): void {
        const roleIndices: { [key: string]: number } = {
            'Sales': 0,
            'Engineer': 1,
            'Admin': 2,
            'Operations': 3,
            'Scientist': 4,
            'Marketing': 5,
            'Finance': 6
        };
    
        const index = roleIndices[role];
        if (index !== undefined) {
            cy.get(this.roleoptions).eq(index).click();
        }
    }

    selectremotesuitability(remotesuitability: string): void {
        const remotesuitabilities = ['Low', 'Medium', 'High'];
        const index = remotesuitabilities.indexOf(remotesuitability);
        if (index !== -1) {
            cy.get(this.remotesuitabilityoptions).eq(index).click();
        }
    }
    

    selectprestige(prestige: string): void {
        const prestiges = ['Low', 'Medium', 'High'];
        const index = prestiges.indexOf(prestige);
        if (index !== -1) {
            cy.get(this.prestigeoptions).eq(index).click();
        }
    }
    

    setname(name: string): void {
        const typeOptions = { delay: 200 };
        cy.get(this.nametextbox).type(name, typeOptions)
    }

    selectgender(gender: string): void {
        const genders = ['Male', 'Female'];
        const index = genders.indexOf(gender);
        if (index !== -1) {
            cy.get(this.genderoptions).eq(index).click();
        }
    }
    

    selectflightrisk(flightrisk: string ): void {
        if(flightrisk === 'Low')
            {
                cy.get(this.flightriskoptions).eq(0).click();
            }

        else if( flightrisk === 'Medium')
            {
                cy.get(this.flightriskoptions).eq(1).click();
            }    
        else if( flightrisk === 'High')
            {
                cy.get(this.flightriskoptions).eq(2).click();
            } 
    }

    selectethnicity(ethnicity: string): void {
        const ethnicities = ['White', 'Asian', 'Hispanic', 'Black', 'Native', 'Multiple'];
        const index = ethnicities.indexOf(ethnicity);
        if (index !== -1) {
            cy.get(this.ethnicityoptions).eq(index).click();
        }
    }

    selecteducation(education: string): void {
        const educations = ['High School', 'Associate', 'Bachelor', 'MBA', 'Master', 'Doctor'];
        const index = educations.indexOf(education);
        if (index !== -1) {
            cy.get(this.educationoptions).eq(index).click();
        }
    }
    

    clickaddbutton(): void {
        cy.get(this.addbtn).click();
    }

    selectamazoncompany(): void {
        cy.get(this.selectamazon).click();
    }

    setcompany(): void {
        const typeOptions = { delay: 300 };
        cy.get(this.searchbtn).type('amazon.com', typeOptions);
        
    }

    clickfilter(): void{
        cy.get(this.filterbtn).click();
    }

    selectfilteroption(filter: string): void {
        const filters = [
            'Company', 'Education', 'Ethnicity', 'Flight Risk', 'Gender', 'Geography',
            'Name', 'Prestige', 'Remote Suitability', 'Role', 'School', 'Seniority',
            'Pay', 'Skill', 'Keyword'
        ];
        const index = filters.indexOf(filter);
        if (index !== -1) {
            cy.get(this.filteroptions).eq(index).click();
        }
    }
    

}
export default Talentdiscovery;