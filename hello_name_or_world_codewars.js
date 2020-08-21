/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

hello "john"   => "Hello, John!"
hello "aliCE"  => "Hello, Alice!"
hello          => "Hello, World!" # name not given
hello ''       => "Hello, World!" # name is an empty String
*/

const hello = (name) => {
  if(name === '' || name === null || name === undefined) {
    return "Hello, World!";
  } else {
    let newName = '';
    for(let i = 0; i < name.length; i++) {
      if(i === 0) {
        newName += name[i].toUpperCase();
      } else {
        newName += name[i].toLowerCase();
      }
    }
    return "Hello, " + newName + "!";
  }
}