const newUserSchema = {
    type: "object",
    properties: {
      name: { type: "string",minLength: 3},
      lastName: { type: "string",minLength: 3},
      email: { type: "string", format: "email" },
      pwd: { type: "string",  minLength: 6},
      confirmPwd: { type: "string", minLength: 6}
      },
      required: ["name", "lastName", "email","pwd" ,"confirmPwd"],
      additionalProperties: false,
  };

  const loginSchema = {
    type: 'object',
    properties: {
      email: { type: 'string' },
      pwd: { type: 'string' },
    },
    required: ["email","pwd"],
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