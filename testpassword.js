import taiPasswordStrength from "tai-password-strength"
  var strengthTester = new taiPasswordStrength.PasswordStrength();
  const getPasswordStrength = (password) => strengthTester.check(password)

const password = 'spice rare umbrella focus relax spider tunnel accident spoon offer balcony evidence hazard inhale cousin'
console.log(getPasswordStrength(password))
