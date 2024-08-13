const Blog=require('../../modals/blogs/blogs')


const getAllBlogs = async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching blogs', error });
    }
  };
  
  // GET Information by college name (page_title)
  const getInformationByBlogTitle = async (req, res) => {
    
    try {
      const { title } = req.params;
      console.log(title)
      const query = { title: title };
      const blogs = await Blog.find(query);
      if (!Blog) {
        return res.status(404).json({ message: 'blogs not found' });
      }
      res.status(200).json(blogs);
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error fetching blogs', error });
    }
  };


  module.exports = {
    getAllBlogs,
    getInformationByBlogTitle    
  };