import routes from "./routes";
import multer from "multer";

const multerVideo = multer({dest : "videos/"});

export const uploadVideoMiddleWare = multerVideo.single("fileURL");

export const localsMiddleWare = (req, res, next) => {   
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated : true,
        id : 1
    };
    next();
};