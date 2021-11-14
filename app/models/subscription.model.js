module.exports = mongoose => {
  return mongoose.model(
      "subscription",
      mongoose.Schema(
        {
          category: {
            type: String,
            required: [true, "Category Required"]
          },
          amount: {
            type: Number,
            required: [true, "Amount Required"]
          },
          destination: {
            type: String,
            required: [true, "Destination Required"]
          },
          source: {
            type: String,
            required: [true, "Source Required"]
          },
        },
        {
          timestamps: false,
          versionKey: false
        }
      )
    );
};