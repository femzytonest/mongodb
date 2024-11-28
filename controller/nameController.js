import mongoose from "mongoose";
import Name from "../schema/nameSchema.js";

export const createName = async (req, res) => {
  const { firstname, lastname, email, age } = req.body;

  if (!firstname || !lastname || !age) {
    res.status(404).json("input cannot be left blank");
  }

  try {
    const nameC = await Name.create(req.body);
    res.status(201).json(nameC);
  } catch {
    res.status(404).json("error unable to create");
  }
};

export const getName = async (req, res) => {
  try {
    const nameC = await Name.find().sort({ createdAt: -1 });
    res.status(201).json(nameC);
  } catch {
    res.status(404).json({ message: "cannot get names" });
  }
};

export const updateName = async (req, res) => {
  const { _id } = req.params;
  const { lastname, firstname, email, age } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res.status(404).json({ message: "invalid id inputted" });
    }
    const nameC = await Name.findByIdAndUpdate(
      _id,
      { lastname, firstname, email, age },
      { new: true }
    );
    res.status(200).json(nameC);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const ageLegal = async (req, res) => {
  // const {_id}= req.params

  try {
    const nameC = await Name.find();
    const filternameC = nameC.filter((nose) => nose.age > 18);

    if (filternameC.length > 0) {
      res.status(200).json(filternameC);
    } else {
      res.status(401).json({ message: "Not meet" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



export const nameDelete = async (req,res)=>{
    const {_id} = req.params

    try{
        if(!mongoose.Types.ObjectId.isValid(_id)){
            res.status(401).json({message: 'not a valid od inputted'})
        }
        const nameC = await Name.findByIdAndDelete(_id)
        if(!nameC){
            return res.status(404).json({message: 'not found'})

        }
        res.status(200).json({nameC: 'i have been deleted'})
    }
    catch(err){
        res.status(500).json({message:err.message})  
      }
}





export const deleteAges5 = async (req, res) => {
    try {
        // Delete all documents where age is less than 5
        const result = await Name.deleteMany({ age: { $lt: 5 } });

        // Check if any documents were deleted
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'No records found with age less than 65' });
        }

        // Respond with a success message
        res.status(200).json({ message: `${result.deletedCount} records deleted successfully` });
    } catch (err) {
        // Handle any server errors
        res.status(500).json({ message: err.message });
    }
};
