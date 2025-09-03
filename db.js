const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://nandinishah2411_db_user:Nan2411*@nandini.ysxzvtb.mongodb.net/?retryWrites=true&w=majority&appName=Nandini",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const studentSchema = new mongoose.Schema({
    name: String,
    department: String,
    startYear:Number,
    endYear:Number,
    address:String, 
});

const Student= mongoose.model("Student",studentSchema);
console.log("MongoDB connected successfully");

const student = new Student({
  name: "Shah Nandini",
  department: "Computer Science",
  startYear: 2024,
  endYear: 2026,
  enrollment: 123456,
  address: "new parimal school rajkot",
});

student
  .save()
  .then(() => {
    console.log("Student saved successfully");
  })
  .catch((error) => {
    console.error("Error saving student:", error);
  });