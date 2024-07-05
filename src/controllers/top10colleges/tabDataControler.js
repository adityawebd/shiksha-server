const TabData=require('../../modals/top10colleges/tabData')

exports.CreateTabData = async (req, res) => {
  const { eventkey,classname,title,colleges } = req.body;

  try {
    const newTabData = new TabData({
      eventkey,
      classname,
      title,
      colleges,
      
    });

    const savedTabData = await newTabData.save();
    res.status(201).json(savedTabData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getTabData = async (req, res) => {
    try {
            const  tabdata= await TabData.find();
            res.status(200).json(tabdata);
            // res.send('tabdata');
          } 
        catch (error) {
            res.status(500).json({ message: error.message });
        }
}
