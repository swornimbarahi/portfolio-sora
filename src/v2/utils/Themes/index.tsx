const DARK_THEME = {
  background: "ui-bg--black"
};

const LIGHT_THEME = {
  background: "ui-bg--white"
};

const Theme = (theme: boolean) => {
  return theme ? DARK_THEME : LIGHT_THEME;
};

export default Theme;
