//functions that return functions

function Question(hobby) {
 
    switch(hobby){
    case 'car':
    return function (name) {
        console.log(name + 'araban var mı?');
      }
    break;

    case 'book':
        return function (name) {
            console.log(name + 'kitabın var mı?');
          }
     break;

     case 'development':

     break;

     default:
 }

}
var carQuestion = Question('car');
carQuestion('Emirhan');