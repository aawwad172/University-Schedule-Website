/**
 * This Course class is used to create object for each course
 * and we store the Name of each course and an array of the section of that course!
 *
 */
import { Section } from "./Section";

class Course {
	constructor(courseName, ...sections) {
		this.setName(courseName);
		this.setSections(...sections);
	}

	// Setters for the class attributes
	set setName(courseName) {
		if (typeof name !== "string") {
			throw new Error("INVALID INPUT: Name must be string");
		}
		this._name = courseName;
	}

	/**
	 * This setter check if the parameter is array!
	 * then it checks if each element of the array is an instance of
	 * Section class!
	 */
	set setSectionsArray(sections) {
		if (!Array.isArray(sections)) {
			throw new Error("Sections must be an array");
		}

		// Validate that each section in the array is an instance of Section
		for (const section of sections) {
			if (!(section instanceof Section)) {
				throw new Error("Each section must be an instance of Section");
			}
		}

		this._sections = sections;
	}

	// Getters for the class attributes
	get name() {
		return this._name;
	}

	/**
	 * This function returns the array of sections
	 * for this course that is calling the function!
	 */
	get Sections() {
		return this._sections;
	}
}

// This is the ES6 method to share the class with other files to use it there.
export default Course;
