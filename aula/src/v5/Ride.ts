import FareCalculator from "./FareCalculator";
import Segment from "./Segment";

export default class Ride {
  OVERNIGHT_FARE = 3.90;
  OVERNIGHT_SUNDAY_FARE = 5;
  SUNDAY_FARE = 2.9;
  NORMAL_FARE = 2.1;
  MIN_FARE = 10;

  private segments: Segment[];

  constructor(readonly fareCalculator: FareCalculator) {
    this.segments = [];
  }

  addSegment (distance: number, date: Date) {
    this.segments.push(new Segment(distance, date))
  }

  calculateFare () {
    let fare = 0;
    for (const segment of this.segments) {
      fare += this.fareCalculator.calculate(segment);
    }
    return (fare < this.MIN_FARE) ? this.MIN_FARE : fare
  }
}