
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
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];


export {cash, eu, rus, money, sumSponsors} ;


