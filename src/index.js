// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let exchange = {};
    if (currency <= 0)
        return exchange;
    if (currency > 0) {
        if (currency > 10000){
            const error = { error : "You are rich, my friend! We don't have so much coins for exchange" };
            return error;
        }; 
        if (currency >= 50) {
            exchange.H = Math.trunc(currency/50);
            currency -= exchange.H * 50;
        };
        if (currency >= 15) {
            if (exchange.H === 0){
                delete exchange.H;
            };
            exchange.Q = Math.trunc(currency/25);
            currency -= exchange.Q * 25;
        };
        if (currency >= 10) {
            if (exchange.Q === 0){
                delete exchange.Q;
            };
            exchange.D = Math.trunc(currency/10);
            currency -= exchange.D * 10;
        };
        if (currency >= 5) {
            if (exchange.D === 0){
                delete exchange.D;
            };
            exchange.N = Math.trunc(currency/5);
            currency -= exchange.N * 5;  
        };
        if (currency >= 1) {
            exchange.P = currency;
        };   
        return exchange;
    };    
}
