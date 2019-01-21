import { employersNames } from './Employers.js'
import {eu, money, sumSponsors} from './Sponsors.js'

class MakeBusiness  {
    constructor ([owner, cash, ...emp], director = 'Victor') {
        this.owner = owner;
        this.cash = cash;
        this.emp = emp;
        this.director = director;
    }
    print1 () {
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
    }
    print2 () {
        console.log('And we have sponsors: ');
    }
    print3() {
        console.log(...sumSponsors);
    }
    print4 () {
        console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
    }
}

const makeBusiness = new MakeBusiness(['Sam', money, ...employersNames]);
 makeBusiness.print1();
 makeBusiness.print2();
 makeBusiness.print3();
 makeBusiness.print4();