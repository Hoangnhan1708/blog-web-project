const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
var mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxLength: 255, require: true },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 1000 },
        level: { type: String, maxLength: 1000 },
        slug: { type: String, slug: 'name', unique: true },
        videoId: { type: String, maxLength: 1000 },
    },
    { timestamps: true },
);
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Course', Course);
