const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter((employer) => {
    return employer.length > 0 && employer !== ''})
    .map(employersName => {
        return employersName.toLowerCase().trim()
    });

export {employersNames};