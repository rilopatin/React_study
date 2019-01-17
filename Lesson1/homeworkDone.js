const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter((employer) => {
    return employer.length > 0 && employer !== ''})
	.map(employersName => {
    return employersName.toLowerCase().trim()
});

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;

function calcCash(cash, own = 0) {
    let total = [own, ...cash];
    return total.reduce((sum, el) => {
        return sum += el;
    });
}
const money = calcCash(cash);

function makeBusiness([owner, cash, ...emp], director = 'Victor') {
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have sponsors: ');
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness (['Sam', money, ...employersNames]);