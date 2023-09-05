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



$('start-calculating-button').click(function() {
	Courses.forEach(course => {
		
		course.sections.sort(compareByFinishTime);
	});

	// todo: Complete implementing the Algorithm of calculating the schedule!
});
