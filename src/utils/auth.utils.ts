export const authValidateEmail = (email: string): boolean => {
  const emailPatter = /^[\w\.-]+@[\w\.-]+\.\w+$/;
  return emailPatter.test(email);
};
