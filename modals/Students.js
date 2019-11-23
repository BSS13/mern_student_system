const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const StudentSchema=new Schema({
    rollno:{
       type:Number,
       required:true,
       unique:true
    },

    name:{
       type:String,
       required:true
    },

    Fathername:{
       type:String,
       required:true
    },

    Mothername:{
       type:String,
       required:true
    },

    DOB:{
        type:String
    },

    Class:{
        type:Number,
        required:true
    },

    address:{
       type:String,
       required:true
    },

    contact:{
       type:String,
       required:true
    }

});

module.exports=Student=mongoose.model('student',StudentSchema);