const newUserSchema = {
    type: "object",
    properties: {
        firstName: { type: "string",minLength: 3},
        lastName: { type: "string",minLength: 3},
        email: { type: "string", format: "email" },
        password: { type: "string",  minLength: 6},
        confirmPassword: { type: "string", minLength: 6}
      },
      required: ["firstName", "lastName", "email","password" ,"confirmPassword"],
      additionalProperties: false,
  };

  const loginSchema = {
    type: 'object',
    properties: {
      email: { type: 'string' },
      password: { type: 'string' },
    },
    required: ["email","password"],
    additionalProperties: false,
  };

  const updateUserSchema = {
    type: "object",
    properties: {
        firstName: { type: "string",minLength: 3},
        lastName: { type: "string",minLength: 3},
        email: { type: "string", format: "email" },
        password: { type: "string",  minLength: 6},
        confirmPassword: { type: "string", minLength: 6},
        bio: { type: "string",maxLength: 20},
        phone: { type: "string",minLength: 3},
      },
      required: [],
      additionalProperties: false,
  };
  

  export {newUserSchema, loginSchema, updateUserSchema};