var testExecutionSummary = {
    suiteName: 'Login Test Suite',
    totalTests: 10,
    passedTests: 10,
    failedTests: 0,
    executionTime: 25000
};
console.log("Test Suite: ".concat(testExecutionSummary.suiteName));
console.log("Total Tests: ".concat(testExecutionSummary.totalTests));
console.log("Passed Tests: ".concat(testExecutionSummary.passedTests));
console.log("Failed Tests: ".concat(testExecutionSummary.failedTests));
console.log("Execution Time: ".concat(testExecutionSummary.executionTime, " ms"));
var percentage = (testExecutionSummary.passedTests / testExecutionSummary.totalTests) * 100;
console.log("Percentage of Passed Tests: ".concat(percentage, "%"));
if (testExecutionSummary.failedTests === 0) {
    console.log('Execution Successful');
}
else {
    console.log('Execution Completed with Failures');
}
