const searchSchema = {
  type: "object",
  properties: {
    value: { type: "string", minLength: 1 },
  },
  required: ["value"],
  additionalProperties: true,
};

export { searchSchema };
