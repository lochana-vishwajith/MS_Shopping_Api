const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const userDetailsSchema = new Schema({

    fullName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    tokens : [
        {
            token : {
                type : String,
                required : true,
            }
        }
        
    ], 
    cart : [
        {
          
            productId : {
                type : String,
                required : true
            },
            title : {
                type : String,
                required : true
            },
            price : {
                type : String,
                required : true
            }
            
        }
    ]

})

userDetailsSchema.methods.generateAuthToken = async function() {
    try{
        let token = jwt.sign({_id : this._id}, "aaaabbbbccccddddeeeeffffggggtttt");
        this.tokens = this.tokens.concat({token : token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}

const userDetails = mongoose.model("UserDetails" , userDetailsSchema);
module.exports = userDetails;