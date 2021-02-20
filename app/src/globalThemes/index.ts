export const lightTheme = {
  "headerFont": `font: 500 30px "recoleta", serif;`,
  "textColor": `black`,
  "backgroundColor": `white`,
  "primaryHeaderColor": `#232555`,
  "nav": {
    "textColor": `white`,
    "grey": {
      "backgroundColor": `#FAEBD7`
    },
    "blue": {
      "backgroundColor": `#121730`
    },
    "white": {
      "backgroundColor": `#fff`
    }
  },
  "buttons": {
    "height": `46px`,
    "disabledOpacity": `0.7`,
    "borderRadius": `40px`,
    "labelFontSize": `17px`,
    "size": {
      "big": `15px 40px;`,
      "medium": `10px 30px`,
      "small": `5px 20px`
    },

    "default": {
      "backgroundColor": `#dd5365`,
      "labelColor": `#fff`,
      "outlinedLabelColor": `#fff`
    },
    "transparent": {
      "backgroundColor": `transparent`,
      "labelColor": `#fff`,
      "outlinedLabelColor": `#fff`
    },
    "grey": {
      "backgroundColor": `#1e2329`,
      "labelColor": `#3c3c3c`,
      "outlinedLabelColor": `#e7e7e7`
    },
    "green": {
      "backgroundColor": `rgba(40, 167, 69, 01)`,
      "labelColor": `#fff`,
      "outlinedLabelColor": `#00d64e`
    },
    "red": {
      "backgroundColor": `#ff3234`,
      "labelColor": `#fff`,
      "outlinedLabelColor": `#ff3234`
    }
  }

};

export const darkTheme = {
  ...lightTheme,
  "textColor": `#fff`,
  "backgroundColor": `#778899`,
  "primaryHeaderColor": `cyan`
};


export type TThemes = typeof lightTheme;
