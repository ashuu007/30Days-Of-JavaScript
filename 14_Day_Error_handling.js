/* 
    Syntex :-
        try {
            // Code goes here
        } catch(err) {
            console.log(err);
        } finally {
            console.log("In any conditions, I will be executed");
        }
*/

// let firstName = "Ashish";

try {
  console.log(firstName);
} catch (err) {
  // console.log(err);
  console.log("firstName not found");
} finally {
  console.log("In any conditions, I will be executed");
}
