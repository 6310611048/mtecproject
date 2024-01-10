const User = require('../models/User');


module.exports = async (req, res) => {
    let UserData = await User.findById(req.session.userId);

    res.render('home', {
        UserData,
    });
};

const Company = require('../models/Company');

module.exports = async (req, res) => {
    let companies = await Company.find({});
    res.render('home', { companies });
};
