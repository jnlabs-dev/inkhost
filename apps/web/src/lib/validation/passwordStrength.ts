export const PASSWORD_RULES = {
  hasUppercase: /[A-Z]/,
  hasNumber: /[0-9]/,
  minLength: 8,
};

export function getPasswordChecks(password: string) {
  return {
    hasUppercase: PASSWORD_RULES.hasUppercase.test(password),
    hasNumber: PASSWORD_RULES.hasNumber.test(password),
    minLength: password.length >= PASSWORD_RULES.minLength,
  };
}

export function getPasswordStrengthLevel(password: string): 0 | 1 | 2 | 3 {
  const checks = getPasswordChecks(password);
  return Object.values(checks).filter(Boolean).length as 0 | 1 | 2 | 3;
}
