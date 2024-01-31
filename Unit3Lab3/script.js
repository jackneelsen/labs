// 1. Declare a variable named submissions that is initialized to an array with the following objects:
const submissions = [
    {firstName: "Jane", score: 95, passed: true},
    {firstName: "Joe", score: 77, passed: true},
    {firstName: "Jack", score: 59, passed: false},
    {firstName: "Jill", score: 88, passed: true}
]
console.log(submissions)

// Functionality: construct an object and push it into the array. 
// The object must have the same properties as the objects already in the array. 
// Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.
const addSubmission = 
    (array, newName, newScore) => {
    let passFail;
    if (newScore >= 60) {
        passed = true 
    }
    else {
        passed = false
    }
    let scorePush = (firstName = newName, score = newScore, passed = passFail)
    array.push(scorePush)
    }

// Declare a function named deleteSubmissionByIndex
// Parameter(s): array, index
// Functionality: remove an object from the array at the specified index using the splice method.

const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1)
}

deleteSubmissionByIndex(submissions, 2)
console.log(submissions)

// Declare a function named deleteSubmissionByName
// Parameter(s): array, name
// Functionality: remove the object from the array that has the provided name.  
// Incorporate the findIndex method and the splice method.

const deleteSubmissionByName = (array, fname) => {
    let index = array.findIndex(names => names === fname)
    array.splice(index, 1)
}

deleteSubmissionByName(submissions, "Jill")
console.log(submissions)


// Declare a function named editSubmission
// Functionality: update an object’s score in the array at the specified index. 
// Use conditional statements to set the value for the passed property to true if the score is greater than 
// or equal to 60 and false otherwise. No array method necessary.

const editSubmission = (array, index, score) => {
    array[index].score = score
    
    if (score >= 60) {
        array[index].passed = true 
    }
    else {
        array[index].passed = false
    }
}
editSubmission(submissions, 1, 14)
console.log(submissions)

// 6. Return the object in the array that has the provided name. 

const findSubmissionByName = (array, fname) => {
    let findName = array.find((names) => names.firstName === fname);
    return findName;
}

let findJoe = findSubmissionByName(submissions, 'Joe');
console.log(findJoe);

// 7: return the object in the array that has the lowest score.

const findLowestScore = (array) => {
    return array.reduce((min, arr) => {return arr.score < min.score ? arr : min;}, array[0])
}
console.log("low")
console.log(findLowestScore(submissions))

// 8. Declare a function named findAverageScore. Functionality: return the average quiz score.

const findAverageScore = submissions.reduce((acc, person) => {return acc + person.score}, 0)
console.log(findAverageScore / submissions.length)

// 9. Return a new array using the filter method; should find objects that have passing scores.

const filterPassing = (array) => {
    return array.filter(person => person.passed === true)
}

console.log(filterPassing(submissions))

// 10. find objects in the array that have scores greater than or equal to 90.

const filter90AndAbove = (array) => {
    return array.filter(person => person.score >= 90)
}

console.log("Congrats on 90+ to: ")
console.log(filter90AndAbove(submissions))