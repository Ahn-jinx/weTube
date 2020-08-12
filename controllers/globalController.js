export const home = (req,res) => res.render('home.pug', {pageTitle : 'Home'});
export const search = (req,res) => res.render('search', {pageTitle : 'search'});
export const join = (req, res) => res.render('join', {pageTitle : 'join'});
export const login =(req, res) => res.render('login', {pageTitle : 'login'});
export const logout =(req, res) => res.render('logout', {pageTitle : 'logout'});