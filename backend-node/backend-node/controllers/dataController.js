const Data = require('../model/dataModel')

// GET ALL Data

exports.getAllData= async(req,res)=>{
    try{
        const events= await Data.find()
        res.status(200).json({
            status:'success',
            results:events.length,
            data:{
                events
            }
        })
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }
}

  //CREATE A BOOK

  exports.postData = async (req, res) => {
    try {
      
      res.status(200).json({
        status: 'success',
        message: 'Data successfully posted',
      });
    } catch (err) {
      console.error('Error posting data:', err);
      res.status(400).json({
        status: 'fail',
        message: err.message,
      });
    }
  };
