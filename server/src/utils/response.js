module.exports = (req,res,status,message,data) => {
    let payload = {
        'data'      : data ? data : {},
        'response'  : message ? message : {},
        'status'    : status ? status : 500,
        'success'   : (status === 200) ? true : false
    }
    res.send(payload);
    return res.end();
}
