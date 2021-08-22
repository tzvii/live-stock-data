const {getCurrentStockPrice} = require('./stockData');

(async () =>
{

    const price = await getCurrentStockPrice('aapl');
    console.log(price);
    
})();