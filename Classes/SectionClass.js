/**
 * This Section class is used to create a new object of type section to store
 * section number and the duration time for each section (Start and Finish)!
 */
export class Section {
	constructor(number, startTime, finishTime) {
		this.SectionNumber = number;
		this.StartTime = startTime;
		this.FinishTime = finishTime;
	}
}
