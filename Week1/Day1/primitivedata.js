let username = 'Chitra1108'

function isAlphanumeric(username1) {
  return /^[a-zA-Z0-9]+$/.test(username);
}
console.log(isAlphanumeric(username)); // true
console.log("Admin123"); // true

try {
  if (!isAlphanumeric(username)) {
    throw new Error('Username contains invalid characters.');
  }
  console.log('Username is valid:', username);
} catch (error) {
  console.error(error.message); // Logs: "Username contains invalid characters."
}
