
let averageGrade = 90;

if (averageGrade < 60) {
    console.log('Unsatisfactory');
} else if (averageGrade <= 70) {
    console.log('Satisfactory');
} else if (averageGrade <= 80) {
    console.log('Good');
} else if (averageGrade <= 90) {
    console.log('Very Good');
} else if (averageGrade <= 100) {
    console.log('Excellent');
} else {
    console.log("The grade you've entered is invalid. Reach out to your teacher.");
}