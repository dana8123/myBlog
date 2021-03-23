export const home = (req,res) => res.render("home",{title: 'myBlog'});
export const upload = (req,res) => res.render("upload",{title: 'myBlog'});
export const update = (req,res) => res.send('this is update');
