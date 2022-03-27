import { UsernamePasswordInput } from "../resolvers/UsernamePasswordInput";

// TODO: use a validation library
const minUsernameLength = 2;
const minPasswordLength = 3;

export const validateRegister = (options: UsernamePasswordInput) => {
  if (!options.email.includes("@")) {
    return [
      {
        field: "email",
        message: "invalid email",
      },
    ];
  }

  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "username cannot include an @",
      },
    ];
  }

  if (options.username.length < minUsernameLength) {
    return [
      {
        field: "username",
        message: `username must be at least ${minUsernameLength} long`,
      },
    ];
  }

  if (options.password.length < minPasswordLength) {
    return [
      {
        field: "username",
        message: `password must be at least ${minPasswordLength} long`,
      },
    ];
  }
  return null;
};
