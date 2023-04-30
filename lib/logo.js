import chalk from "chalk";
import figlet from "figlet";

const newline = "\n";

const logo01 = "       _            █████ █████ ██████                    ";
const logo02 = "       \\`*-.        ██    ██ ██   ██                ";
const logo03 = "        )  _`-.     ██    █████   ██                  ";
const logo04 = "       .  : `. .    █████ ██ ██   ██                 ";
const logo05 = "       : _   '  \\                         ";
const logo06 = "       ; *` _.   `*-._                      ";
const logo07 = "       `-.-'          `-.                  ";
const logo08 = "         ;       `       `.               ";
const logo09 = "         :.       .        \\              ";
const logo10 = "         . \\  .   :   .-'   .             ";
const logo11 = "         '  `+.;  ;  '      :             ";
const logo12 = "         :  '  |    ;       ;-.           ";
const logo13 = "         ; '   : :`-:     _.`* ;          ";
const logo14 = "      .*' /  .*' ; .*`- +'  `*'           ";
const logo15 = "      `*-*   `*-*  `*-*'                  ";

/* const logo = chalk.yellow(
  figlet.textSync("CAT", {
    horizontalLayout: "full",
    font: "ANSI Regular",
  }),
); */

const output =
  logo01 +
  newline +
  logo02 +
  newline +
  logo03 +
  newline +
  logo04 +
  newline +
  logo05 +
  newline +
  logo06 +
  newline +
  logo07 +
  newline +
  logo08 +
  newline +
  logo09 +
  newline +
  logo10 +
  newline +
  logo11 +
  newline +
  logo12 +
  newline +
  logo13 +
  newline +
  logo14 +
  newline +
  logo15;

const logo = chalk.yellow(output);

export default logo;
