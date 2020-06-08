const cache = require('memory-cache');

module.exports = {
    clear:async (req,res)=>{
        cache.clear();
        res.send();
    }
};
