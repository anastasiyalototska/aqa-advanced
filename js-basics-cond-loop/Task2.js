let averageGrade = 90;

switch (true) {
	case averageGrade < 60:
		console.log('Unsatisfactory');
		break;
	case averageGrade <= 70:
		console.log('Satisfactory');
		break;
	case averageGrade <= 80:
		console.log('Good');
		break;
	case averageGrade <= 90:
		console.log('Very Good');
		break;
	case averageGrade <= 100:
		console.log('Excellent');
		break;
	default:
		console.log("The grade you've entered is invalid. Reach out to your teacher.");
		break;
}
