/**
 * scheduleTest.js
 *
 * This file contains test cases for the semester schedule calculation algorithm.
 * It tests the algorithm's ability to select non-overlapping sections based on the
 * "Earliest Finish Time" method, considering different course modes (Online, Offline, Blended, Lab).
 *
 * The test setup includes:
 * - Sample sections with different modes and timings.
 * - Sample courses that use these sections.
 * - A test case that calls the `calculatingSchedule` function with the sample courses.
 *
 * The expected output is logged to the console, showing the recommended schedule.
 *
 * Dependencies:
 * - Course and Section classes from the respective module.
 * - calculatingSchedule function from the main module.
 *
 * Usage:
 * Run this file to execute the test case and view the recommended schedule.
 *
 * @author [Ahmad Awwad]
 * @date [September 6, 2023]
 */

// Import necessary classes and functions
import { calculatingSchedule } from "../js/main.js";
import { Course } from "../js/Classes/Course";
import { Section } from "../js/Classes/Section.js";

// Create some sample sections
const section1 = new Section(
	"1",
	"08:00",
	"09:30",
	"Online",
	"Monday-Wednesday"
);

const section2 = new Section(
	"2",
	"09:00",
	"10:30",
	"Offline",
	"Monday-Wednesday"
);
const section3 = new Section(
	"3",
	"11:00",
	"12:00",
	"Blended",
	"Sunday-Tuesday-Thursday"
);
const section4 = new Section(
	"4",
	"12:00",
	"13:30",
	"Offline",
	"Monday-Wednesday"
);
const section5 = new Section("5", "14:00", "15:00", "Lab", "Thursday");

// Create additional blended sections
const blendedSection1 = new Section("6", "10:00", "11:30", "Blended", "Monday"); // Monday in-person
const blendedSection2 = new Section(
	"7",
	"12:00",
	"13:30",
	"Blended",
	"Wednesday"
); // Wednesday in-person

// Create some sample courses with the above sections
const course1 = new Course("Course1", [section1, section2]);
const course2 = new Course("Course2", [section3]);
const course3 = new Course("Course3", [section4, section5]);
const blendedCourse = new Course("BlendedCourse", [
	blendedSection1,
	blendedSection2,
]);

// Create an array of these sample courses
const sampleCourses = [course1, course2, course3, blendedCourse];

// Test Case
console.log("Test Case:");
const result = calculatingSchedule(sampleCourses);
for (const entry of result) {
	console.log(
		`Course: ${entry.course.name}, Section: ${entry.section.sectionNumber}, Time: ${entry.section.startTime} - ${entry.section.finishTime}`
	);
}
