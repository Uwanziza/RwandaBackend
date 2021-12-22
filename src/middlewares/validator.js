import {check, validationResult} from "express-validator";

class Validator{

    static validateInput=(req,res,next)=>{

        const errors =validationResult(req);
        if(!errors.isEmpty()){
            const errorMessage= errors.errors.map((err)=>err.msg);
            return res.status(400).json({messsage: errorMessage});
        }

        return next();

    };

    static newAccountRules(){

        return[
            check("email", "email is invalid").isEmail(),
            check("password", "password is not strong").isStrongPassword(),
            check("lastName", "Last name should be valid").trim().isAlpha(),
            check("firstName", "First name should be valid").trim().isAlpha(),
            check(
                "gender",
                "Gender should be among male,female,other, not-say,"
            )
               .trim()
               .isIn(["male", "female", "other", "not-say"]),
        ];
    }

   
    static newAccountTourRules(){

        return [
            check("title","title is invalid").trim().isAlpha(),
            check("seats","seats should be number").trim().isNumeric(),
            check("available","available seats should be numbers").trim().isNumeric(),
            
            check("dueDate","Due Date should be valid").trim().isDate(),
            //check("price","Price is invalid").trim().isAlphanumeric(),
            //check("dateScheduled","date Scheduled should be valid").trim().isDate(),
        ];

  }
  }
export default Validator;