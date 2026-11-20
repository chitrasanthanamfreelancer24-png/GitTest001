let testExecutionSummary :{
suiteName :string,
totalTests :number,
passedTests: number,
failedTests: number,
executionTime: number, //miliseconds
}
= {
    suiteName: 'Login Test Suite',
    totalTests: 10,
    passedTests: 10,
    failedTests: 0,
    executionTime: 25000
}
console.log(`Test Suite: ${testExecutionSummary.suiteName}`);
console.log(`Total Tests: ${testExecutionSummary.totalTests}`);
console.log(`Passed Tests: ${testExecutionSummary.passedTests}`);
console.log(`Failed Tests: ${testExecutionSummary.failedTests}`);
console.log(`Execution Time: ${testExecutionSummary.executionTime} ms`);    

let percentage: number = (testExecutionSummary.passedTests / testExecutionSummary.totalTests) * 100;
console.log(`Percentage of Passed Tests: ${percentage}%`);

if (testExecutionSummary.failedTests === 0) {
    console.log('Execution Successful');
} else {
    console.log('Execution Completed with Failures');
}