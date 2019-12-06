export class CounterService {
  activeActionCount = 0;
  inactiveActionCount = 0;

  increaseActiveLogCount() {
    this.activeActionCount++;
    this.loggingActionSummary();
  }

  increaseInactiveLogCount() {
    this.inactiveActionCount++;
    this.loggingActionSummary();
  }

  loggingActionSummary() {
    console.log('Changed active accounts to inactive: ' + this.activeActionCount + ' times');
    console.log('Changed inactive accounts to active: ' + this.inactiveActionCount + ' times');
  }
}
