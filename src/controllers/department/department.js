const Department = require('../../modals/department/department')

// exports.Createdepartment = async (req, res) => {
//     const { college, imgSrc, title, location, course, view_all_courses_link, fees, id } = req.body;

//     try {
//         const newdepartment = new Department({
//             id,
//             college,
//             imgSrc,
//             title,
//             location,
//             course,
//             fees,
//             view_all_courses_link

//         });

//         const saveddepartment = await newdepartment.save();
//         res.status(201).json(saveddepartment);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

exports.getdepartment = async (req, res) => {
    try {
        const department = await Department.find();
        res.status(200).json(department);
        // res.send('department');
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getdepartmentdata = async (req, res) => {
    try {
        const { college } = req.params;
        const query = { college: college };
        // query[college] = "IT Kharagpur";
        const department = await Department.find(query);
        res.status(200).json(department);
        // res.send('department');
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// exports.putdepartmentdata = async (req, res) => {
//     try {
//         const { id } = req.params;
//         // const query = {college:college};
//         const _id = id;
//         const department = await Department.updateOne({ _id }, { $set: req.body })
//         res.status(200).json(department);
//         // res.send('department');
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }




// exports.deletedepartmentdata = async (req, res) => {
//     try {
//         if (req.query?.id) {
//             await College.deleteOne({ _id: req.query?.id });
//             res.json(true);
//         }
        

//         // res.send('department');
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message });
//     }

// } 