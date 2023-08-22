const conn = require('../db');


const getBanners = (req, res) => {
    conn.query(`SELECT bannerLink FROM banners`, function(err, result, fields) {
        if (err) console.log(err);
        res.status(200).json({
            data: result
        });
    });
}

module.exports = {
    getBanners
}