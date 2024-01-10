const Company = require('../models/Company');

// สำหรับเพิ่มบริษัท
async function addCompany(req, res) {
    try {
        await Company.create({ name: req.body.name });
        console.log("Company added successfully");
        res.redirect('/home');
    } catch (error) {
        console.error(error);
        res.redirect('/home');
    }
}

// สำหรับลบบริษัท
async function deleteCompany(req, res) {
    try {
        const companyId = req.body.subcompanyId;
        console.log("Deleting company with ID:", companyId);

        await Company.findByIdAndDelete(companyId);
        console.log("Company deleted successfully");
        res.redirect('/home');
    } catch (error) {
        console.error(error);
        res.redirect('/home');
    }
}

//rename
async function renameCompany(req, res) {
    try {
        const companyId = req.body.companyId; // รับ ID บริษัท
        const newName = req.body.newName; // รับชื่อใหม่

        await Company.findByIdAndUpdate(companyId, { name: newName });
        console.log(`Company with ID: ${companyId} renamed to ${newName}`);
        res.redirect('/home');
    } catch (error) {
        console.error(error);
        res.redirect('/home');
    }
}


module.exports = {
    addCompany,
    deleteCompany,
    renameCompany
};
