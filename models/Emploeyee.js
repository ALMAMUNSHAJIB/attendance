const {Schema, model} = require('mongoose');

const emploeyeeSchema = Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
   status: {
       type: String,
       enum: ["active", "Inactive"],
       default: "active"
   }
},{
    timestamps: true
});

const Emploeyee = model('Emploeyee', emploeyeeSchema);
module.exports = Emploeyee;