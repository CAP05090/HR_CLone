// const mongoose = require("mongoose");

// const questionSchema = mongoose.Schema({
//     status:{type:String, required: true},
//     skills: { type: String, required: true },
//     difficulty: { type: String, required: true },
//     subDomain: { type: String, required: true },
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     example: [{ type: String }],
//     functionDescription: [{ type: String }],
//     print: { type: String },
//     inputFormat: [{ type: String }],
//     constraints: [{ type: String }],
//     outputFormat: [{ type: String }],
//     sampleInput: {type: [String]},
//     sampleOutput: [{type: String}],
//     explanation: { type: [String]},
//     hints: { type: String }
// }, { versionKey: false });

// const QuestionModel = mongoose.model("Question", questionSchema);

// module.exports = QuestionModel;

const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    status: { type: mongoose.Schema.Types.Mixed, required: true },
    skills: { type: mongoose.Schema.Types.Mixed, required: true },
    difficulty: { type: mongoose.Schema.Types.Mixed, required: true },
    subDomain: { type: mongoose.Schema.Types.Mixed, required: true },
    title: { type: mongoose.Schema.Types.Mixed, required: true },
    description: { type: mongoose.Schema.Types.Mixed, required: true },
    example: { type: mongoose.Schema.Types.Mixed },
    functionDescription: { type: mongoose.Schema.Types.Mixed },
    print: { type: mongoose.Schema.Types.Mixed },
    inputFormat: { type: mongoose.Schema.Types.Mixed },
    constraints: { type: mongoose.Schema.Types.Mixed },
    outputFormat: { type: mongoose.Schema.Types.Mixed },
    sampleInput: { type: mongoose.Schema.Types.Mixed },
    sampleOutput: { type: mongoose.Schema.Types.Mixed },
    explanation: { type: mongoose.Schema.Types.Mixed },
    hints: { type: mongoose.Schema.Types.Mixed }
}, { versionKey: false });

const QuestionModel = mongoose.model("Question", questionSchema);

module.exports = QuestionModel;

