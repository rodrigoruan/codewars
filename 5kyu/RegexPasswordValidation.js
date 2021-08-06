// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

function validate(password) {
  return password.length > 6
    && /[a-z]/.test(password)
      && /[A-Z]/.test(password)
        && /\d/.test(password)
          && password.replace(/[^A-z0-9]/g, '') === password
}