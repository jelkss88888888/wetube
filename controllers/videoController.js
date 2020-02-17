import routes from "../routes";
import Video from "../models/Video";

export const homeCon = async (req, res) => {
    try {
        const videos = await Video.find({});
        res.render("home", {siteTitle : "HOME", videos : videos});
    } catch(error) {
        console.log(error);
        res.render("home", {siteTitle: "HOME", videos : []});
    }
};

export const searchCon = (req, res) => {
    const {query: {term : searchTerm}} = req;
    res.render("search", {siteTitle : "SEARCH", searchTerm : searchTerm, videos});
};
export const getUploadCon = (req, res) => res.render("uploadVideo", {siteTitle : "UPLOAD"});

export const postUploadCon = async (req, res) => {
    const {
        body : {title, description},
        file : {path}
    } = req;
    const newVideo = await Video.create({
        fileUrl : path,
        title,
        description
    });
    console.log(newVideo);
    //To Do : Upload and Save Video
    res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetailCon = (req, res) => res.render("videoDetail", {siteTitle : "VIDEO DETAIL"});
export const editVideoCon = (req, res) => res.render("videoEdit", {siteTitle : "EDIT VIDEO"});