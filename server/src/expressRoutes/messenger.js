const ethUtil   = require('ethereumjs-util');
const { v4: uuidv4 } = require('uuid');

module.exports = async(req,res) => {
  let userId = uuidv4();
  let token = res.locals.jwt.sign({'messenger': userId});
  if (!token) {
    return res.locals.response(req,res,500,{'error':'Internal Error.'},{});
  }
  return res.locals.response(req,res,200,{},{'token': token});
}
