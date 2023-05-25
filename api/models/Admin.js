const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const adminSchema = new Schema({
    userid: {type: String, required: true},
    admincode: {type: String,require:true},
});
const UserModel = model('Admin', UserSchema);

module.exports = UserModel;