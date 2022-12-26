const mongoose = require("mongoose");

// function dayOfWeek() {
//   [
//     {
//       type: String,
//       enum: [
//         "monday",
//         "tuesday",
//         "wednesday",
//         "thursday",
//         "saturday",
//         "sunday",
//       ],
//     },
//   ];
// }

const goalSchema = mongoose.Schema(
  {
    isActive: {
      type: Boolean,
      default: false,
      required: [true, "True if Active, False if Not"],
    },
    Day: {
      type: String,
      // enum: dayOfWeek,
    },
    Title: {
      type: String,
      required: [true, "Please add Title"],
    },
    Message: {
      type: String,
      required: [true, "Please add a Message"],
    },
    Comment: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", goalSchema);
