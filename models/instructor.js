var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var InstructorSchema = new Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        ski_level: { type: String, required: true },
        snowboard_level: { type: String, required: false },
    }
);

// Virtual for instructor's URL
InstructorSchema
    .virtual('url')
    .get(function () {
        return '/instructor/' + this._id;
    });

//Export model
module.exports = mongoose.model('Instructor', InstructorSchema);