var companyAdminModel= require('../Model/companyAdminModel');

exports.getallCompanyAdmin = function (req, res) {
  companyAdminModel.getAllCompanyAdmins (req,res,getAllCompAdmin);
};

getAllCompAdmin = function (req,res,result)
{
    // dispaly all company admins
}

exports.insertCompanyAdmin = function (req,res){

    companyAdminModel.insertnewCompanyAdmin (req,res,insertCompAdmin);
}

insertCompAdmin = function (req,res,result)
{
 // display after inserted succ
}

exports.deleteCompanyAdmin = function (req,res)
{
    companyAdminModel.deleteCompanyAdmin(req,res,deleteCompAdmin);
}

deleteCompAdmin=function(req,res,result)
{
    // deleted success
}