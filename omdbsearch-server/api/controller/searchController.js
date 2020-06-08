const cache = require('memory-cache');

const omdbService = require("../service/omdbService");
module.exports = {
    search:async (req,res,next)=>{

        const url = req.originalUrl || req.url;
        const cacheKey = url.toLowerCase();
        const cachedBody = cache.get(cacheKey);
        if (cachedBody) {
            return res.send(cachedBody);
        }

        const keyword = req.query.keyword || '';

        try{
            const response = await omdbService.search(keyword);
            cache.put(cacheKey, {...response, fromCache: true}, 30000);
            res.setHeader('Cache-Control', 'private, max-age=30');
            res.send(response);
        }catch (error) {
            next(error);
        }
    }
};
