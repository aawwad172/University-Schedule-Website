/**
 * Represents a semester schedule that manages courses and their sections.
 */

import { Course } from "./Course";

class Schedule {
	/**
	 * This constructor doesn't do anything except declaring the result map
	 * that we will assign the result to.
	 */
	constructor() {
		this._courses = {};
	}

	/**
	 * addCoursesMap is a function to add the result map into the _courses variable
	 * after insuring that the parameter is a map and each instance of it is Course type!
	 */
	set coursesMap(map) {
		if (!(map instanceof Map)) {
			throw new Error("ERROR: Passed object is not a MAP!");
		}

		for (const course of map.values()) {
			if (!(course instanceof Course)) {
				throw new Error("ERROR: Map has instances that is not of type Course!");
			}
		}

		this._courses = map;
	}
}
