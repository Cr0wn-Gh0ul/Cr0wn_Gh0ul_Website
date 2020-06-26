const ethUtil   = require('ethereumjs-util');

module.exports = async(req,res) => {
  if (!req.body ||
      !req.body.signature ||
      req.body.signature.indexOf('0x') != 0 ||
      !req.body.token
  ) {
    return res.locals.response(req,res,400,{'error': 'Invalid Request.'},{})
  }
  let payload = await res.locals.jwt.verify(req.body.token);
  if (!payload) {
    return res.locals.response(req,res,401,{'error': 'Invalid Token.'},{})
  }
  let sigAddr;
  try {
    let bufferAddress   = ethUtil.toBuffer('0x' + Buffer.from(payload.msg).toString('hex'));
    let msgHash         = ethUtil.hashPersonalMessage(bufferAddress);
    let sig             = ethUtil.toBuffer(req.body.signature)
    let sigParams       = ethUtil.fromRpcSig(sig)
    let publicKey       = ethUtil.ecrecover(msgHash, sigParams.v, sigParams.r, sigParams.s)
    let sender          = ethUtil.publicToAddress(publicKey)
    sigAddr             = ethUtil.bufferToHex(sender)
  } catch(ex) {
    return res.locals.response(req,res,401,{'error':'Bad signature.'},{});
  }

  if (sigAddr.length != 42 && sigAddr.indexOf('0x') != 0) {
    return res.locals.response(req,res,401,{'error':'Bad signature.'},{});
  }

  let newToken = res.locals.jwt.sign({'user': sigAddr});
  if (!newToken) {
    return res.locals.response(req,res,500,{'error':'Internal Error.'},{});
  }

  return res.locals.response(req,res,200,{},{'token': newToken});
}
