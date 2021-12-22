import mongoose from 'mongoose';

const tourSchema=new mongoose.Schema(
    {
     title:String,
     description:String,

     seats:{
         type:Number,
     },
     available:{
         type:Number,
        
     },
     images:[
         {
             type:String,
         },
     ],
     user:{

    type:mongoose.Schema.ObjectId,
    ref:'User',
    },

     dateScheduled:{
         type:Date, 
     },
    dueDate:{
        type:Date,
    },
    phone:{
        type:String,
    }

    },

     {
     timestamps:true,
     }

   );
   tourSchema.pre(/^find/,function(next){
       this.populate({path:"user",
        select:"lastname email address"
    });
       next();
   })
   const tour =mongoose.model('Tour',tourSchema);

   export default tour;