const Information = require('../../modals/collegepage/information'); // Adjust the path to your model

// GET all Informations
const getAllInformations = async (req, res) => {
  try {
    const informations = await Information.find();
    res.status(200).json(informations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Informations', error });
  }
};

// GET Information by college name (page_title)
const getInformationByCollegeName = async (req, res) => {
  
  try {
    const { college } = req.params;
    console.log(college)
    const query = { college: college };
    const information = await Information.find(query);
    if (!Information) {
      return res.status(404).json({ message: 'Information not found' });
    }
    res.status(200).json(information);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error fetching Information', error });
  }
};

// POST a new Information
const createInformation = async (req, res) => {
  const newInformation = new Information(req.body);
  try {
    const savedInformation = await newInformation.save();
    res.status(201).json(savedInformation);
  } catch (error) {
    res.status(400).json({ message: 'Error creating Information', error });
  }
};

// PUT (Information) an existing Information
const InformationInformation = async (req, res) => {
  const { id } = req.params;
  try {
    const InformationdInformation = await Information.findByIdAndInformation(id, req.body, { new: true });
    if (!InformationdInformation) {
      return res.status(404).json({ message: 'Information not found' });
    }
    res.status(200).json(InformationdInformation);
  } catch (error) {
    res.status(400).json({ message: 'Error updating Information', error });
  }
};

module.exports = {
  getAllInformations,
  getInformationByCollegeName,
  createInformation,
  InformationInformation
};
