import jwt from 'jsonwebtoken'
import modelUser from "../../mongoos/schemas/model_User.js";

export  const requireAuthe = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, 'hhhh', (err, decodedToken) => {
            if (err) {
                console.log(err.message)
                res.redirect('/login')
            }else {
                console.log(decodedToken)
                next();
            }
        })
    }else{
        res.redirect('/login')
    }
}

export const checkuser= (req,res,next)=>{
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, 'hhhh', async (err, decodedToken) => {
            if (err) {
                console.log(err.message)
                res.locals.user=null;
                next()
            }else {
                console.log(decodedToken)
                let user=await modelUser.findById(decodedToken.id);
                res.locals.user=user;
                next();
            }
        })
    }else{
        res.redirect('/login')
        next()
    }

}