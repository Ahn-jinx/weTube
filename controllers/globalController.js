export const home = (req,res) => res.render('home.pug', {pageTitle : 'Home'});
export const search = (req,res) => {
    const searched = req.query.term
    res.render('search.pug', {pageTitle : 'search', searched : searched});
    }
export const join = (req, res) => res.render('join', {pageTitle : 'join'});
export const login =(req, res) => res.render('login', {pageTitle : 'login'});
export const logout =(req, res) => res.render('logout', {pageTitle : 'logout'});