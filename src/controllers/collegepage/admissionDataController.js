const InnerAdmissionData=require('../../modals/collegepage/admissionData')
exports.CreateAdmissionData = async (req, res) => {
    const { id, name, className, h5_1, importantEventsTableData, h5_2, expiredEventsTableData, cutOffData } = req.body;
  
    try {
      const newInnerAdmissionData = new InnerAdmissionData({
        id,
        name,
        className,
        h5_1,
        importantEventsTableData,
        h5_2,
        expiredEventsTableData,
        cutOffData
      });
  
      const savedInnerAdmissionData = await newInnerAdmissionData.save();
      res.status(201).json(savedInnerAdmissionData);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


exports.getAdmissionData = async (req, res) => {
    // try {
    //     const AdmissionData = await InnerAdmissionData.find();
    //     res.status(200).json(AdmissionData);
    //   } catch (error) {
    //     res.status(500).json({ message: error.message });
    //   }


      try {
        const AdmissionData = await InnerAdmissionData.find();
        
        // Modify the response to include only the date part
        const modifiedAdmissionData = AdmissionData.map(AdmissionData => {
          const modifiedImportantEvents = AdmissionData.importantEventsTableData.map(event => ({
            ...event._doc,
            event_date: event.event_date.toISOString().split('T')[0]  // Extracting the date part
          }));
    
          const modifiedExpiredEvents = AdmissionData.expiredEventsTableData.map(event => ({
            ...event._doc,
            event_date: event.event_date.toISOString().split('T')[0]  // Extracting the date part
          }));
    
          return {
            ...AdmissionData._doc,
            importantEventsTableData: modifiedImportantEvents,
            expiredEventsTableData: modifiedExpiredEvents
          };
        });
    
        res.status(200).json(modifiedAdmissionData);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
  };
  