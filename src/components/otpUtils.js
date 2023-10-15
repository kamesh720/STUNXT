import cryptoRandomString from "crypto-random-string";

// Generate a random 4-digit OTP
export function generateOTP() {
  return cryptoRandomString({ length: 4, type: "numeric" });
}

// Validate the entered OTP
export function validateOTP(enteredOTP, generatedOTP) {
  return enteredOTP === generatedOTP;
}
