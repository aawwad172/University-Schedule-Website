import { Section } from "./Classes/Section";
import { Course } from "./Classes/Course";

// -------------------------------------------------------------------------------------------

function createSectionObject(sectionNumber, startTime, finishTime) {
	// Function receives two parameters: section number and time of the section
	// First we will extract the start time and the finish time.
	let sectionObject = new Section(sectionNumber, startTime, finishTime);
	return sectionObject; // Returning our newly created object with all its properties set up correctly!
}

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

// Sort sections based on finishTime
function compareByFinishTime(sectionA, sectionB) {
	const finishTimeA = new Date(`1970-01-01T${sectionA.finishTime}`);
	const finishTimeB = new Date(`1970-01-01T${sectionB.finishTime}`);
	return finishTimeA - finishTimeB;
}

/**
 * Calculates a schedule based on the provided courses and days.
 * It uses the Earliest Finish Time approach to select non-overlapping sections.
 * 
 * @param {Course[]} courses - Array of the type Course that include the courses that we need to choose sections from.
 * @param {string[]} [days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]] - An array of days to filter the sections. Defaults to Sunday to Thursday.
 * @returns 
 */
function calculatingSchedule(
	courses,
	days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"] // Default value if we didn't get any array of strings for the days!
) {
	// Create a mapping between sections and their courses
	// to map  it after we finish the result array!
	const sectionToCourseMap = new Map();

	// First we should add all the section of all the courses into 1 array to sort them
	// depending on the earliest finish time!

	let allSections = [];

	for (const course of courses) {
		for (const section of course.sections) {
			sectionToCourseMap.set(section, course);

			// Handle Online courses
			if (section.mode === "Online") {
				allSections.push(section);
				continue; // No need to check for conflicts
			}

			// Handle Offline courses
			if (section.mode === "Offline") {
				allSections.push(section);
			}

			// Handle Blended courses
			if (section.mode === "Blended") {
				if (section.type === "Monday-Wednesday" && section.day === "Monday") {
					// Assuming Monday is in-person for this example
					allSections.push(section);
				}
				if (
					section.type === "Sunday-Tuesday-Thursday" &&
					(section.day === "Sunday" || section.day === "Tuesday")
				) {
					allSections.push(section);
				}
			}

			// Labs are treated like Offline courses
			if (section.type === "Lab") {
				allSections.push(section);
			}
		}
	}

	// Sort sections based on startTime (you can use compareByFinishTime for sorting by finishTime)
	allSections.sort(compareByFinishTime);

	// Now we have all the sections of all courses inside one array called allSections and it's sorted
	// based on the earliest finish time!
	// Starting Computing the Schedule
	const takenSections = [];
	let endTime = "12:00 AM"; // Initialize with midnight

	for (let i = 0; i < allSections.length; i++) {
		const section = allSections[i];
		if (section.startTime >= endTime) {
			takenSections.push(section);
			endTime = section.finishTime;
		}
	}

	// Now, takenSections contains the sections in the schedule with no overlapping
	// You can use sectionToCourseMap to associate sections with their corresponding courses
	const schedule = takenSections.map((section) => {
		const course = sectionToCourseMap.get(section);
		return { course, section };
	});

	return schedule;
}
