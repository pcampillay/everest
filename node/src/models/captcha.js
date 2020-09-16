const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CaptchaSchema = new Schema(
{
    id_puerta: { type: Number },
    codigo: { type: String },
}, { timestamps: { createdAt: 'created_at' }}
);

module.exports = mongoose.model('captcha', CaptchaSchema);