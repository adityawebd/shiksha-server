const { FixedData, ReviewsDataa }  =require('../../modals/collegepage/reviewData');

exports.CreateReviewData= async (req,res)=>{

    const {title,title_link,rating,helpful_or_not,likes,dislikes }= req.body;

    try{
        const newReviewData= new ReviewsDataa({
            title,
            title_link,
            rating,
            helpful_or_not,
            likes,
            dislikes
        });
        const savedReviewData= await newReviewData.save();
        res.status(201).json(savedReviewData);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
      }
}

exports.GetReviewData= async (req,res)=>{
    try {
            const ReviewData = await ReviewsDataa.find();
            res.status(200).json(ReviewData);
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
}



// exports.CreatePageData= async (req,res)=>{

//     const {title,title_link,rating,helpful_or_not,likes,dislikes }= req.body;

//     try{
//         const newReviewData= new FixedData({
//             title,
//             title_link,
//             rating,
//             helpful_or_not,
//             likes,
//             dislikes
//         });
//         const savedReviewData= await newReviewData.save();
//         res.status(201).json(savedReviewData);
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message });
//       }
// }


exports.Getpagedata= async (req,res)=>{
    try {
            const ReviewData = await FixedData.find();
            res.status(200).json(ReviewData);
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
}