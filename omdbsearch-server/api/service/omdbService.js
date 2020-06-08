/** created by ozgur 2019-08-20**/
const axios = require('axios');

const OMDB_API_URL = process.env.OMDB_API_URL;
const OMDB_API_KEY =  process.env.OMDB_API_KEY;

const createUrl = (keyword, page) => `${OMDB_API_URL}/?apikey=${OMDB_API_KEY}&s=${keyword}&page=${page}&type=movie`;

module.exports = {
    search: async keyword => {
        try {
            const response = await axios.get(createUrl(keyword, 1));
            const result = {...response.data};

            if (!result.Error) {
                if (response.data.totalResults > 10) {
                    const secondPage = await axios.get(createUrl(keyword, 2));
                    result.Search = [...response.data.Search, ...secondPage.data.Search];
                }
            }
            return result;
        }
        catch (e) {
            return e;
        }
    }
};
