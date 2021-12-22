
import TourInfos from '../models/tourUser';

class TourController{

    // create user in db
    static async createTour(req,res){
        const tour= await TourInfos.create(req.body);
        if(!tour){
       return res.status(404).json({error:"user not registered"})
        }
        return res 
        .status(200)
        .json({message:'User created successfully',data:tour});
    }
    
    // get all users
    static async getAllTour(req,res){
        const tous = await TourInfos.find();
        if(!tous){
       return res.status(404).json({error:"user not retrieved"})
        }
        return res 
        .status(200)
        .json({message:'successfully retrived users',data:tous});
    }

    //get oneTour
    static async getOneTour(req,res){
        req.body.user=req.user._id;
        const tour =await UserInfos.findById(req.params.id);
        if(!tour){
            return res.status(404).json({error:"user not found"});
        }
        return res
        .status(200)
        .json({message:'User found',data:tour});
    }
    //delete oneTour
    static async deleteOneTour(req,res){
        const tour =await UserInfos.findByIdAndDelete(req.params.id);
        if(!tour){
            return res.status(404).json({error:"user not found"});
        }
        return res
        .status(200)
        .json({message:'One data deleted',data:tour});
    }
}
export default TourController;