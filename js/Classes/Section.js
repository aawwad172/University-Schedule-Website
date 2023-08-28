/**
 * This Section class is used to create a new object of type section to store
 * section number and the duration time for each section (Start and Finish)!
 */
class Section {
	constructor(sectionNumber, startTime, finishTime) {
		this.setSectionNumber(sectionNumber);
		this.setStartTime(startTime);
		this.setFinishTime(finishTime);
	}

	// Setters for the class attributes
	set setSectionNumber(sectionNumber) {
		// sectionNumber : int
		if (!Number.isInteger(sectionNumber)) {
			throw new Error("INVALID INPUT: sectionNumber must be an integer!");
		}
		if (sectionNumber) this._sectionNumber = sectionNumber;
	}

	set setStartTime(startTime) {
		if (!this.isValidStartTime(startTime)) {
			throw new Error("Invalid startTime format");
		}
		this._startTime = startTime;
	}

	set setFinishTime(finishTime) {
		if (!this.isValidFinishTime(finishTime)) {
			throw new Error("Invalid finishTime format!");
		}
		this._finishTime = finishTime;
	}

	/**
	 * Getters for the class
	 * Those getters will be called without using the ()
	 * like this `instanceOfClass.startTime`
	 * The method of creating getters and setters that are accessed like regular properties
	 * (without using parentheses) is often referred to as
	 * "accessor properties" or "accessor methods".
	 */
	get sectionNumber() {
		return this._sectionNumber;
	}

	get startTime() {
		return this._startTime;
	}

	get finishTime() {
		return this._finishTime;
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
