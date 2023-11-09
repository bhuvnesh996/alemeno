import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
        name:{
            type:String,
            required: true,
        },
        instructor:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        enrollmentStatus:{
            type:String,
            default:"Open",
            required:true
        },
        thumbnail:{
            type:String,
            required:true
        },
        duration:{
            type:String,
            required:true
        },
        location:{
            type:String,
            required:true,
            default:"Online"
        },
        syllabus:[
            {
                week: {
                    type:String,
                },
                topic: {
                    type:String,
                },
                content: {
                    type:String,
                }

            }
        ],
        status :{
            type:String,
            required:"on"
        }



});

const Course = mongoose.model("Course", CourseSchema);

export default Course;
