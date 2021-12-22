import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
class TokenAuth{
/*
*Generate Token
*@export
*@param{object} data object
*@return
*@class Token TokenAuth
*/
static tokenGenerator(data){
    const token =jwt.sign(data,process.env.JWT_KEY);
    return token;
}
    static decodeToken(token){
        const data =jwt.verify(token,process.env.JWT_KEY);
        return data;
    }
}
export default TokenAuth;