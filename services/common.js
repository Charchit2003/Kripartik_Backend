const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  
  //TODO : this is temporary token for testing without cookie
  // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjE5MjM1NDZkNmVjMTIyZjk5N2JjNCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzI3MTA3NjM3fQ.oA_YtLWKDW_lKQEWNM18c9-dRUa8tvvvLquOpq1obGw";
  // Below is admin token.
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjFhYWIzMzM3NTg5MmI3ZWY0NWExYiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzI3MTEzOTA3fQ.PGOETWlMEZf9rz1eNgrbbt6W0mw3-Xc4KteM6_Zgrgc";
  return token;
};