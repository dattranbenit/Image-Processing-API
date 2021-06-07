import { DisplayProcessor, SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';
class CustomProcessor extends DisplayProcessor {
    public displayJasmineStarted(log: string): string {
      return `${log}`;
    }
}
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
new SpecReporter({
    suite: {
    displayNumber: true
    },
    spec: {
    displayStacktrace: StacktraceOption.NONE
    },
    customProcessors: [CustomProcessor]
}) as jasmine.CustomReporter
);




