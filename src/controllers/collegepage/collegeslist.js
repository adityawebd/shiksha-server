const College =require('../../modals/collegepage/collegeslist')

exports.getCollege=async function(req,res)
{
    
      try {
        const colleges = await College.find({});
        res.status(200).json({ success: true, data: colleges });
      } catch (error) {
        res.status(400).json({ success: false });
      }
 
}

exports.getCollegeByName=async function(req,res)
{
        const { name } = req.params;
        const query = { name: name };
        const colleges = await College.find(query);
        res.status(200).json(colleges);

}