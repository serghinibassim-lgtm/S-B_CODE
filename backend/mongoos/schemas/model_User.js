import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: [true, 'enter fullname'],
            minlength: [6, 'fullnam min length is 6']
        },
        email: {
            type: String,
           // unique:true,
            required: [true, 'enter email obligatoir']
        },
        password: {
            type: String,
            required: [true, 'enter password'],
            minlength: [4, 'password min length is 4']
        }
    }
);


userSchema.pre('save',async function (next){
    const salt=await bcrypt.genSalt();
    this.password= await bcrypt.hash(this.password,salt)
    next()
})

userSchema.statics.login= async function(email, password) {
    const user = await this.findOne({ email });
    if (!user) {
        throw Error('Email incorrect');
        return ;
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
        throw Error('Mot de passe incorrect');
    }
    return user;
}


const modelUser = mongoose.model('User', userSchema);
export default modelUser;