import { createMuiTheme } from "@material-ui/core";
import { lightGreen, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette:{
        primary: {
            main: red.A700
        },
        secondary:{
            main: lightGreen.A400
        }
    }
});

export default theme;