const mongoose = require('mongoose');

const RagPickerSchema = new mongoose.Schema({
    ragpickerfullname: {
        type: String,
        required: true
    },
    ragpickeremail: {
        type: String,
        required: true,
        unique: true
    },
    ragpickerphone: {
        type: String,
        required: true
    },
    ragpickercreatedpass: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('RagPicker', RagPickerSchema, 'rag-pickers');
