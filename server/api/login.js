var EventProxy = require('eventproxy');
var LoginSimul = require('../simuls/RsaLogin');

module.exports = function (req, res, next) {
  var proxy = new EventProxy();
  var login = new LoginSimul(proxy);
  proxy.assign('ngaCookie', function (ngaCookie) {
    res.cookie('ngaCookie', ngaCookie);
    res.end(ngaCookie);
  });
  login.doLogin(req.body.username, req.body.password);
};