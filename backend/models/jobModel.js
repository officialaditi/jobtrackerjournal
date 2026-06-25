import mongoose, { Schema } from "mongoose";

const jobSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        companyName: { type: String, required: true },
        companyLink: { type: String, required: true },
        location: {type: String, required: true},
        salary: { type: String, required: false },
        note: { type: String, required: false },
        appliedDate: { type: Date, default: Date.now },
        status: {
            type: String,
            enum: ["Applied", "Save", "Accepted", "Rejected", "Follow-up"],
            default: "Save",
        },
        user: { type: Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true },
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
