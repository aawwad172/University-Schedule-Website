/**
 * This Course class is used to create object for each course
 * and we store the Name of each course and an array of the section of that course!
 *
 */
import { Sections } from "./SectionClass";

export class Course {
	constructor(courseName, ...sections) {
		this.Name = courseName;
		this.Sections = sections;
	}
}
