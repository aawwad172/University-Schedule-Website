/**
 * Represents a university course section.
 *
 * @class
 */
class Section {
	/**
	 * Creates a new Section instance.
	 *
	 * @param {number} sectionNumber - The number of the section.
	 * @param {string} startTime - The start time of the section in "hh:mm AM/PM" format.
	 * @param {string} finishTime - The finish time of the section in "hh:mm AM/PM" format.
	 * @param {(string|string[])} day - The day(s) on which the section occurs. Can be a single day (e.g., "Monday") or an array of days (e.g., ["Sunday", "Tuesday"]).
	 * @param {string} mode - The mode of the course. Can be "Online", "Offline", or "Blended".
	 * @param {string} type - The type of the course. Can be "Sunday-Tuesday-Thursday", "Monday-Wednesday", or "Lab".
	 */
	constructor(sectionNumber, startTime, finishTime, day, mode, type) {
		this.setSectionNumber(sectionNumber);
		this.setStartTime(startTime);
		this.setFinishTime(finishTime);
		this.setDay(day);
		this.setMode(mode); // Setting the mode attribute (Online, Offline, Blended)
		this.setType(type); // Setting the type attribute (Sunday-Tuesday-Thursday, Monday-Wednesday, Lab)
	}

	/**
	 * Accessor Properties (Getters and Setters) for the class.
	 *
	 * These accessors allow interaction with class properties as if accessing direct attributes.
	 * For instance, use `instanceOfClass.startTime` to retrieve or set values instead of invoking a method.
	 * Such design, where getters and setters are accessed like regular properties without parentheses,
	 * is commonly known as "accessor properties" or "accessor methods".
	 */

	/**
	 * Sets the section number.
	 *
	 * @param {number} sectionNumber - The number of the section to set.
	 */
	set setSectionNumber(sectionNumber) {
		// sectionNumber : int
		if (!Number.isInteger(sectionNumber)) {
			throw new Error("INVALID INPUT: sectionNumber must be an integer!");
		}
		if (sectionNumber) this._sectionNumber = sectionNumber;
	}

	/**
	 * Gets the section number.
	 *
	 * @returns {number} - The section number.
	 */
	get sectionNumber() {
		return this._sectionNumber;
	}

	/**
	 * Sets the start time of the section.
	 *
	 * @param {string} startTime - The start time in "hh:mm AM/PM" format.
	 */
	set setStartTime(startTime) {
		if (!this.isValidStartTime(startTime)) {
			throw new Error("Invalid startTime format");
		}
		this._startTime = startTime;
	}

	/**
	 * Gets the start time of the section.
	 *
	 * @returns {string} - The start time in "hh:mm AM/PM" format.
	 */
	get startTime() {
		return this._startTime;
	}

	/**
	 * Sets the finish time of the section.
	 *
	 * @param {string} finishTime - The finish time in "hh:mm AM/PM" format.
	 */
	set setFinishTime(finishTime) {
		if (!this.isValidFinishTime(finishTime)) {
			throw new Error("Invalid finishTime format!");
		}
		this._finishTime = finishTime;
	}

	/**
	 * Gets the finish time of the section.
	 *
	 * @returns {string} - The finish time in "hh:mm AM/PM" format.
	 */
	get finishTime() {
		return this._finishTime;
	}

	/**
	 * Sets the day(s) of the section.
	 *
	 * @param {(string|string[])} day - The day(s) to set. Can be a single day (e.g., "Monday") or an array of days (e.g., ["Sunday", "Tuesday"]).
	 */
	set setDay(day) {
		const validDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

		if (!validDays.includes(day)) {
			throw new Error(
				"Invalid day provided. It should be one of Sunday, Monday, ... Saturday."
			);
		}
		this._day = day;
	}

	/**
	 * Gets the day(s) of the section.
	 *
	 * @returns {(string|string[])} - The day(s) of the section.
	 */
	get day() {
		return this._day;
	}

	/**
	 * Sets the mode of the section.
	 *
	 * @param {string} mode - The mode to set. Must be one of "Online", "Offline", "Blended".
	 */
	set setMode(mode) {
		const validModes = ["Online", "Offline", "Blended"];
		if (!validModes.includes(mode)) {
			throw new Error(
				"Invalid mode provided. It should be one of Online, Offline, Blended."
			);
		}
		this._mode = mode;
	}

	/**
	 * Gets the mode of the section.
	 *
	 * @returns {string} - The mode of the section.
	 */
	get mode() {
		return this._mode;
	}

	/**
	 * Sets the type of the section.
	 *
	 * @param {string} type - The type to set. Must be one of "Sunday-Tuesday-Thursday", "Monday-Wednesday", "Lab".
	 */
	set setType(type) {
		const validTypes = ["Sunday-Tuesday-Thursday", "Monday-Wednesday", "Lab"];
		if (!validTypes.includes(type)) {
			throw new Error(
				"Invalid type provided. It should be one of Sunday-Tuesday-Thursday, Monday-Wednesday, Lab."
			);
		}
		this._type = type;
	}

	/**
	 * Gets the type of the section.
	 *
	 * @returns {string} - The type of the section.
	 */
	get type() {
		return this._type;
	}

	/**
	 * Checks if a given time string adheres to the "hh:mm AM/PM" format and has valid hour and minute values.
	 *
	 * @param {string} timeString - The time string to validate in the "hh:mm AM/PM" format.
	 * @returns {boolean} True if the time string is valid; otherwise, false.
	 */
	isValidStartTime(startTimeString) {
		const timePattern = /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i;
		return timePattern.test(startTimeString);
	}

	/**
	 * Checks if a given finish time string adheres to the "hh:mm AM/PM" format and has valid hour and minute values.
	 *
	 * @param {string} finishTimeString - The finish time string to validate in the "hh:mm AM/PM" format.
	 * @returns {boolean} True if the finish time string is valid; otherwise, false.
	 */
	isValidFinishTime(finishTimeString) {
		const timePattern = /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i;
		return timePattern.test(finishTimeString);
	}
}

// Also this line to let you import the class in other parts
// of the code and other files to use it there.
export default Section;