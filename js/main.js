import {Section} from "./Classes/Section";
import {Course} from "./Classes/Course";

function createSectionObject(sectionNumber, startTime, finishTime) {
	// Function receives two parameters: section number and time of the section
	// First we will extract the start time and the finish time.
	let sectionObject = new Section(sectionNumber, startTime, finishTime);
	return sectionObject; // Returning our newly created object with all its properties set up correctly!
}

// This is an array of objects to store the courses and each course has a section
let Courses = [];
function addCourseToArray(course) {
	// This function to add the created objects into an array of objects!
	if (course instanceof Course) {
		Course.push(course);
	} else {
		console.log("The provided Object for is not a object of type Course!");
	}
}

function createCourseObject(Name, ...Sections) {
	// This function receive the Name of the Course and the array of Sections
	// Array of sections has an objects of Sections where there is the number
	// of the section and the time for that section!
	let course = new Course(Name, Sections);
	addCourseToArray(course);
}

// Interface Scripts ------------------------------------------------------------
let Sections = [];
$("#add-section-button").click(function () {
	let courseName = $("course-name");
	let name = courseName.val();

	let sectionNumber = $("section-number");
	let section = sectionNumber.val();

	let sectionStartTime = $("section-start-time");
	let startTime = sectionStartTime.val();

	let sectionFinishTime = $("section-finish-time");
	let finishTime = sectionFinishTime.val();

	Courses.forEach((course) => {
		// Checking if the Course is already in the Courses Array!
		if (course.Name == name) {
			window.alert("Course is already existed!");
			return;
		} else {
			Sections.length = 0; // This for clearing the Array!
			let object = createSectionObject(
				sectionNumber,
				sectionStartTime,
				sectionFinishTime
			);
			Sections.push(object);
		}
	});

	// Now you should clear the fields of the UI!
	sectionNumber.val() = "";
	sectionStartTime.val() = "";
	sectionFinishTime.val() = "";
});


$("#add-another-course-button").click(function() {
	let courseName = $("course-name");
	let name = courseName.val();
	// Now we will create a new object of the Course class:
	let course = new Course(name, Sections);
	Courses.push(course);

	courseName.val() = "";
	// Clear the Array of Sections:
	Sections.length = 0;
});

// Here we will write the algorithm to calculate the schedule!
let result = [];

function createNewRow(course, sectionNumber) {
	let row = $(`<tr> <td>${course.Name}</td> <td>${course.Sections[sectionNumber].SectionNumber}</td> <td>${course.Sections[sectionNumber].StartTime} - ${course.Sections[sectionNumber].FinishTime}</td></tr>`)
	let table = $('#result-table');
	// Adding the new row value to the DOM UI!
	table.append(row);
}

// Sort sections based on finishTime
function compareByFinishTime(sectionA, sectionB) {
	const finishTimeA = new Date(`1970-01-01T${sectionA.finishTime}`);
	const finishTimeB = new Date(`1970-01-01T${sectionB.finishTime}`);
	return finishTimeA - finishTimeB;
}

$('start-calculating-button').click(function() {
	// First we should sort the courses depending on the earliest finish time!
	// Loop through each course and sort its sections
	Courses.forEach(course => {
		// Sort sections based on startTime (you can use compareByFinishTime for sorting by finishTime)
		course.sections.sort(compareByFinishTime);
	});

	// todo: Complete implementing the Algorithm of calculating the schedule!
});
