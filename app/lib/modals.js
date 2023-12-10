import mongoose from "mongoose";

const tasks = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

export const Tasks = mongoose.models.Tasks || mongoose.model("Tasks", tasks);
