const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/PracticeExamDB', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connected to Practice Exam DB")
}).catch((err)=>{
    console.log
})