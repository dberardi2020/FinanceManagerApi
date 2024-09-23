module.exports = mongoose => {
  const transactionDate = mongoose.Schema({
    day: {
      type: Number,
      min: 1,
      max: 31,
      required: [true, "'transactionDate:day' field Required"]
    },
    month: {
      type: Number,
      min: 1,
      max: 12,
    }
  }, { _id: false })

  return mongoose.model(
      "subscription",
      mongoose.Schema(
        {
          active: {
            type: Boolean,
            default: false
          },
          transactionType: {
            type: String,
            required: [true, "'transactionType' field required"],
            enum: ["Withdrawal", "Deposit"]
          },
          category: {
            type: String,
            required: [true, "'category' field Required"]
          },
          amount: {
            type: Number,
            required: [true, "'amount' field Required"]
          },
          destination: {
            type: String,
            required: [true, "'destination' field Required"]
          },
          source: {
            type: String,
            required: [true, "'source' field Required"]
          },
          frequencyType: {
            type: String,
            required: [true, "'frequencyType' field Required"],
            enum: ["Weekly", "Monthly", "Yearly"]
          },
          frequency: {
            type: Number,
            required: [true, "'frequency' field Required"],
            validate: {
              validator: Number.isInteger,
              message: "{VALUE} is not an an integer"
            }
          },
          transactionDate: {
            type: transactionDate,
            required: [true]
          }
        })
    )
}