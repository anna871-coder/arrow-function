//function pageload() {
//    console.log("running");
//}

/* const pageload = () => {
    console.log("arrow Function is running");
} */

/* const pageload = _ => {
    console.log("Another arrow Function is running");
} */

/* const pageload = _ => {
    const returnText = () => "Returned text.";
    console.log(returnText());
} */
const addition = (a, b) => a + b; 

const pageload = _ => {
    console.log(addition(5, 6));
}

/* const pageload = _ => {
    const addition = function (a, b) {
        return a + b;
    }
    console.log(addition(5, 6));
} */

window.addEventListener("load", pageload)