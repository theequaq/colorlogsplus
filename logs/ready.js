var err= (exports.ready = {});

err.message= function(msg){
    const now = new Date();
    var time = `${('0' + now.getHours()).slice(-2)}:${('0' + now.getMinutes()).slice(-2)}:${('0' + now.getSeconds()).slice(-2)}`;


    var res0 = msg.replace("$rs/", "\x1b[0m");//reset
    var res1 = res0.replace("$bl/", "\x1b[30m");//black
    var res2 = res1.replace("$sh/", "\x1b[1m"); //bold
    var res3 = res2.replace("$r/", "\x1b[31m");//red
    var res4 = res3.replace("$g/", "\x1b[32m");//green
    var res5 = res4.replace("$y/", "\x1b[33m");//yellow
    var res6 = res5.replace("$b/", "\x1b[34m");//blue
    var res7 = res6.replace("$m/", "\x1b[35m");//magenta
    var res8 = res7.replace("$c/", "\x1b[36m");//cyan
    var res9 = res8.replace("$w/", "\x1b[37m");//white
    var res10 = res9.replace("$un/", "\x1b[4m");//underlind

    console.log("\x1b[0m["+time+"][READY!] - "+ res10 + "\x1b[0m");
}