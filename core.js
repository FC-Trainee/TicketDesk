//CREATTING THE APPLICATION CORE CLASS 
function core()
{
  var lib={};      //THE LIBRARY OBJECT WHICH WILL STORE THE SHARED METHODS AND VARIABLE WHICH WILL BE USED BY OTHE MEMBERS AS PER REQUUIREMENT
  
//DEFINING PROPERTIES FOR THE CORE CLASS 
    //THE GET AUTHETICATION PROPERTY PROVIDES UNIQUE AUTHETICATION ,PRODUCES A RANDOM NUMBER BASED ON THE USERS REGISTRATION KEY
  Object.defineProperty(core,"getAuthentication",{
    value:function(){var a=Math.random()*100000000;var b=Math.random()*100;var c=Math.round(a/b); return c;},
    configurable:false,
    writable:false,
    enumerable:false,});


//REGISTER PROPERTY ,A FUNCTION WHICH LETS THE MEMEBERS REGISTER THEIR METHODS AND CLASSES WHICH MIGHT BE USED BY OTHER MEMBERS 
  Object.defineProperty(core,"register",{
    value:function(val,lib_key,pass)
      {
        if(typeof lib[lib_key]==='undefined')
            lib[lib_key]=[val,pass];
        else if(typeof lib[lib_key]==="object" && lib[lib_key][1]==pass)
          {
            lib[lib_key]=[val,pass];
            console.log("Congratulation,you have set a new value to the core library!!");
          }
        else if(typeof lib[lib_key]==="object" && lib[lib_key][1]!==pass)
          {
            console.log("You are not authorized to do this operation");
          }

        },
    configurable:false,
    writable:false,
    enumerable:false,});

//THE ACCESS_LIB FUNCTION WHICH LETS THE OTHER MEMEBERS ACCESS ALL THE METHODS AL READY STORED IN THE LIBRARY OBJECT.
  Object.defineProperty(core,"Access_lib",{
    value:function(lib_key)
        {
          //console.log(lib_key);
          //var x=lib[lib_key];
          return lib[lib_key][0]; 
        },
    configurable:false,
    writable:false,
    enumerable:false
  });

}
core();
//@AUTHORED BY SAYAN SIKDAR