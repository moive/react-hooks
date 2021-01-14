import { createMuiTheme } from "@material-ui/core";
import { lightGreen, purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette:{
        primary: {
            main: purple[500]
        },
        secondary:{
            main: lightGreen.A400
        }
    }
});

export default theme;