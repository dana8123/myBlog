//global 

const HOME = "/";

//posting
const UPLOAD = "/upload";
const DETAIL = "/:id";
const EDIT_POST = "/:id/edit";
const DELETE_POST = "/:id/delete";

const routes = {
  home : HOME,
  upload : UPLOAD,
  detail : DETAIL,
  editPost : EDIT_POST,
  deletePost : DELETE_POST
}

export default routes;