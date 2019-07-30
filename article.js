var mongoose = require("mongoose");

// save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ArticleSchema object
// This is similar to a Sequelize model
var ArticleSchema = new Schema({
	// `title` is required and of type String
	title: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	},
	// `note` is an object that stores a Note id
	// the ref property links the ObjectId to the Note model
	// this allows us to populate the Article with an associated Note
	note: {
		type: Schema.Types.ObjectId,
		ref: "Note"
	},
	// `saved` is a boolean...whether the article has been saved or not
	// when an article is first scraped and saved to the db, saved = false
	saved: {
		type: Boolean,
		required: true,
		default: false
	}
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;