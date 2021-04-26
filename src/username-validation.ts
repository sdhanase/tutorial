export const usernameValidation = (uname: string): boolean => {

  const ch = uname.substring(0, 1);

  if (uname.length < 4 || uname.length > 25) {
    return false;
  }
  else if (!(ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z')) {
    return false;
  }

  else if (!validatecharacters(uname)) {
    return false;
  }
  else if (uname.slice(-1) == "_") {
    return false
  }
  else return true;
}

const validatecharacters = (unamechk: string): boolean => {
  for (let i = 0; i < unamechk.length; i++) {
    if (!(unamechk[i] == "_" || (unamechk[i] >= 'a' && unamechk[i] <= 'z') ||
      (unamechk[i] >= 'A' && unamechk[i] <= 'Z') || (parseInt(unamechk[i])))) {
      return false;
    }
  }
  return true;
};
