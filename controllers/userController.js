import routes from "../routes";

export const getJoinCon = (req, res) => res.render("join", {siteTitle : "JOIN"});
export const postJoinCon = (req, res) => {
    const {body : {
        name, email, password, password2
    }} = req;
    if(password !== password2) {
        res.status(400);
        res.render("join", {siteTitle : "JOIN"});
    } else {
        //TODO : User register
        //TODO : User Log user In
        res.redirect(routes.home);
    };
};

export const getLoginCon = (req, res) => res.render("login", {siteTitle : "LOGIN"});
export const postLoginCon = (req, res) => {
    res.redirect(routes.home);
};

export const logoutCon = (req, res) => {
    //To Do : Process logout
    res.redirect(routes.home);
};
export const editProfileCon = (req, res) => res.render("editProfile", {siteTitle : "EDIT PROFILE"});
export const postEditProfileCon = (req, res) => {
    const {
        body : {avatar, name, email}
    } = req;
    //To Do : edit profile
    res.redirect(routes.userDetail(1234));
}

export const changePasswordCon = (req, res) => res.render("changePassword", {siteTitle : "CHANGE PASSWORD"});
export const userDetailCon = (req, res) => res.render("userDetail", {siteTitle : "USER DETAIL"});