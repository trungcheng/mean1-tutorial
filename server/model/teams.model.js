var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({
	name: {type: String, required: true},
	description: String,
	owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	members: [{ type: mongoose.Schema.Types.ObjectId , ref: 'User'}],
	members_processing: [],
	active: {type: Boolean, default: false},
	created_at: {type:Date, default: Date.now},
	updated_at: {type:Date, default: Date.now},
	created_by: {type: mongoose.Schema.Types.ObjectId},
	updated_by: {type: mongoose.Schema.Types.ObjectId}
})

module.exports = mongoose.model('Team', TeamSchema);