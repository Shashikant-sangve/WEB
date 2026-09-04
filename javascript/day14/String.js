//literal way

let str = 'hello'
console.log(str);

let str1 = "hello world"
console.log(str1);

let str2 = `javascript`
console.log(str2);

//constructor way

let str4 = String("css")
console.log(str4);

let str5 = "hello world"
console.log(str5);
console.log(str5[1]);
console.log(str5[6]);


console.log(str5.slice(1, 8));
console.log(str5.substring(1, 8));
console.log(str5.substr(1, 1));
console.log(str5.toUpperCase());
console.log(str5.toLowerCase());
console.log(str5.startsWith("H"));
console.log(str5.startsWith("h"));
console.log(str5.endsWith("x"));
console.log(str5.endsWith("d"));
console.log(str5.endsWith("d"));
console.log(str5.includes("k"));
console.log(str5.includes("l"));
console.log(str5.indexOf("l"));
console.log(str5.lastIndexOf("l"));
console.log(str5.split(""));
console.log(str5.split(" "));
console.log(str5.split("l"));

let str6 = "css"
console.log(str5.concat(str6));
console.log(str6);
console.log(str6.trim());
console.log(str6.trimStart());
console.log(str6.trimEnd());


let str7 = "javascript"
console.log(str7.charAt(1));
console.log(str7.charCodeAt(1));
console.log(str7.charCodeAt(2));
console.log(str7.charCodeAt12);
console.log(str7.charCodeAt(20));
console.log(str7.charAt(20));
console.log(str7.charCodeAt("x"));


let str8 = "javascript script webscript"
console.log(str8.repeat(5));
console.log(str8.replace("java", "css"));
console.log(str8.replace("s", "x"));
console.log(str8.replaceAll("s", "x"));