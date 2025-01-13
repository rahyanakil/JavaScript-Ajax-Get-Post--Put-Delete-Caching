// callback function
// callback function emn ekta function jeita k function hisabe call kore pore daka jai abr onno function er parameter hisabe owo pass kora jai 
// javascript single threaded : mane hocche javascript syncronous mane multitask korte pare na ektar por arekta complete kore then porer kaj e jai eg: ami porbo then vat khabo then ghumabo ek sathe ami porar sathe sathe vat khate parbo na eita hocche single threaded meaning
// But javascript asyncronous : like ekta kaj kortase oitar moddhe arekta kaj asle oi kaj ta atke jabe nan 
console.log("Heloo")
setTimeout(()=>{
       console.log("I am asyncronous though i execuited early but i will be appear in 3 sec")
},3000)
console.log("I am execuited lately but i will be appear before ")

