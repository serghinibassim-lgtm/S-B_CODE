import modelUser from '../../mongoos/schemas/model_User.js'
import jwt from 'jsonwebtoken'


const createToken = (id) => {
    return jwt.sign({id}, 'hhhh', {expiresIn: 3600000})
}
const handelErrors = (err) => {
    let errors = {fullname: '', email: '', password: ''}
    if (err.message == 'Email incorrect') {
        errors.email = "this email  incorecte"
    }
    if (err.message == 'Mot de passe incorrect') {
        errors.password = "this  password incorecte "
    }

    if (err.code == 11000) {
        errors.email = 'thath email is already registrede';
        return errors;
    }
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach((properties) => {
            console.log(errors.properties)
            errors[properties.path] = properties.message;
        })
    }

    return errors;

}


export const Signup_get = (req, res) => {

}

export const Signup_post = async (req, res) => {
    const {body} = req;
    try {
        const newUser = new modelUser(body)
        const savedUser = await newUser.save()
        const token = await createToken(savedUser.id)
        console.log(token)
        res.cookie('jwt', token, {
            httponly: true,
            maxAge: 360000,
            sameSite: 'lax',
        })
        console.log(savedUser)
        res.status(201).send(savedUser)

    } catch (err) {
        const errors = handelErrors(err);
        console.log(errors)
        res.status(400).json({errors})
    }
}
//__________________________________________________________
export const Login_get = (req, res) => {


}

export const Login_post = async (req, res) => {

    const {email, password} = req.body;

    try {
        const user = await modelUser.login(email, password);
        const token = createToken(user._id);
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 3 * 24 * 60 * 60 * 1000
        });
        res.status(200).json({user: user._id});
    } catch (err) {
      const errors=handelErrors(err)
        res.status(400).json({errors});
    }
};

//logout
export const Logout_get=(req,res)=>{
    res.cookie('jwt','',{maxAge:1})
    res.redirect('/')
}
