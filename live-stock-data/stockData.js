const axios = require('axios');

const baseUrl = 'https://www.marketwatch.com/investing/stock/';

/**
 * 
 * @param {string} ticker 
 * 
 * @return {Promise<number>}
 */
const getCurrentStockPrice = async (ticker) =>
{
    try
    {
        const response = await axios.get(baseUrl + ticker, { json: true });

        const scrapedPrice = response.data
            .split('name="price" content="$')[1]
            .split('<meta name="priceChange"')[0]
            .split('" />')[0];

        return parseFloat(scrapedPrice);
    }
    catch (e)
    {
        throw new Error(e);
    }
};

module.exports =
{
    getCurrentStockPrice
};