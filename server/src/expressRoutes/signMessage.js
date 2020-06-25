const { v4: uuidv4 } = require('uuid');

module.exports = async(req,res) => {
  let msg = uuidv4();
  if (!msg) {
    return res.locals.response(req,res,500,{'error': 'Internal error.'},{})
  }

  let token = await res.locals.jwt.sign({'msg':msg});
  if (!token) {
    return res.locals.response(req,res,500,{'error': 'Internal error.'},{})
  }

  return res.locals.response(req,res,200,{}, {'msg': msg, 'token': token});
}
