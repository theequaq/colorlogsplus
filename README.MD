```js
const log = require('colorlogsplus').Logger;

log.command("Command");
log.debug("Debug");
log.error("Error");
log.event("Event");
log.info("Info");
log.log("Log");
log.ready("Ready");
log.test("Test");
//with colors
    //  $rs/ Resets the color
    //  $bl/ Make the color black
    //  $bold/ Makes the dont bold!
    //  $r/ Makes the color red
    //  $g/ Makes the color green
    //  $y/ Makes the color yellow
    //  $b/ Makes the color blue
    //  $m/ Makes the color magenta
    //  $c/ Makes the color cyan
    //  $w/ Makes the color white
    //  $un/ Make a line under the text!

log.command("$b/Command");
log.debug("$un/Debug");
log.error("$y/Error");
log.event("$r/Event");
log.info("$bl/Info");
log.log("$m/Log");
log.ready("$wReady");
log.test("$g/Test");

```



