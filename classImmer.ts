import { immerable, produce } from "immer";

class Clock {
  [immerable] = 1;
  hour: number;
  minute: number;
  private timeNow: string;
  constructor(hour: number, minute: number) {
    this.hour = hour;
    this.minute = minute;
    this.timeNow = `${this.hour}:${this.minute}`;
  }
  get time() {
    return this.timeNow.slice();
  }
  set time(s: string) {
    this.timeNow = this.timeNow + s;
  }

  tick() {
    return produce(this, (draft) => {
      draft.minute++;
      draft.time = "Time is";
    });
  }
}

const clock = new Clock(10, 10);
const cloneClock = clock.tick();
console.log(clock.time);
console.log(cloneClock.time);
console.log(clock.hour);
// cloneClock.hour = 2; can't writable
// cloneClock.time = `${this.hour}`; still not work if writable
console.log(cloneClock instanceof Clock); // true
