const assert = require('assert');
const solution = require('../src/solution');

let totalTests = 0;
let passedTests = 0;

function test(description, testFn) {
    totalTests++;
    try {
        testFn();
        console.log(`✓ ${description}`);
        passedTests++;
    } catch (error) {
        console.log(`✗ ${description}`);
        console.log(`  Expected: ${JSON.stringify(error.expected)}`);
        console.log(`  Actual:   ${JSON.stringify(error.actual)}`);
    }
}

// Helper function to compare objects with specific key order
function assertDayOrder(result, expected) {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    for (let day of days) {
        if (result[day] !== expected[day]) {
            throw new assert.AssertionError({
                message: `Day ${day} mismatch`,
                actual: result,
                expected: expected,
                operator: 'deepStrictEqual'
            });
        }
    }
    return true;
}

// Test cases
console.log('Running tests...\n');

// Base test case from example 1
test('Base test case - consecutive days', () => {
    const D = {
        '2020-01-01': 6,
        '2020-01-02': 7,
        '2020-01-03': 8,
        '2020-01-04': 9,
        '2020-01-05': 10
    };
    
    const expected = {
        'Mon': 0,
        'Tue': 0,
        'Wed': 6,
        'Thu': 7,
        'Fri': 8,
        'Sat': 9,
        'Sun': 10
    };
    
    const result = solution(D);
    assertDayOrder(result, expected);
});

// Test case from example 2
test('Missing days with interpolation', () => {
    const D = {
        '2020-01-01': 6,
        '2020-01-04': 9,
        '2020-01-05': 10
    };
    
    const expected = {
        'Mon': 0,
        'Tue': 0,
        'Wed': 6,
        'Thu': 0,
        'Fri': 8,
        'Sat': 9,
        'Sun': 10
    };
    
    const result = solution(D);
    assertDayOrder(result, expected);
});

// Test case from example 3
test('Complex missing days case', () => {
    const D = {
        '2020-01-01': 6,
        '2020-01-04': 9,
        '2020-01-05': 10,
        '2020-01-07': 4
    };
    
    const expected = {
        'Mon': 0,
        'Tue': 4,
        'Wed': 6,
        'Thu': 0,
        'Fri': 8,
        'Sat': 9,
        'Sun': 10
    };
    
    const result = solution(D);
    assertDayOrder(result, expected);
});

// Edge case: Empty input
test('Empty input', () => {
    const D = {};
    
    const expected = {
        'Mon': 0,
        'Tue': 0,
        'Wed': 0,
        'Thu': 0,
        'Fri': 0,
        'Sat': 0,
        'Sun': 0
    };
    
    const result = solution(D);
    assertDayOrder(result, expected);
});

// Edge case: Single day
test('Single day input', () => {
    const D = {
        '2020-01-01': 5
    };
    
    const expected = {
        'Mon': 0,
        'Tue': 0,
        'Wed': 5,
        'Thu': 0,
        'Fri': 0,
        'Sat': 0,
        'Sun': 0
    };
    
    const result = solution(D);
    assertDayOrder(result, expected);
});

// Edge case: All days present
test('All days present', () => {
    const D = {
        '2020-01-05': 1, // Sun
        '2020-01-06': 2, // Mon
        '2020-01-07': 3, // Tue
        '2020-01-01': 4, // Wed
        '2020-01-02': 5, // Thu
        '2020-01-03': 6, // Fri
        '2020-01-04': 7  // Sat
    };
    
    const expected = {
        'Mon': 2,
        'Tue': 3,
        'Wed': 4,
        'Thu': 5,
        'Fri': 6,
        'Sat': 7,
        'Sun': 1
    };
    
    const result = solution(D);
    assertDayOrder(result, expected);
});

// Edge case: Multiple entries for same day
test('Multiple entries for same day', () => {
    const D = {
        '2020-01-01': 3, // Wed
        '2020-01-08': 4, // Wed
        '2020-01-15': 5  // Wed
    };
    
    const expected = {
        'Mon': 0,
        'Tue': 0,
        'Wed': 12, // 3 + 4 + 5
        'Thu': 0,
        'Fri': 0,
        'Sat': 0,
        'Sun': 0
    };
    
    const result = solution(D);
    assertDayOrder(result, expected);
});

// Edge case: Only weekend days
test('Only weekend days', () => {
    const D = {
        '2020-01-04': 10, // Sat
        '2020-01-05': 20  // Sun
    };
    
    const expected = {
        'Mon': 0,
        'Tue': 0,
        'Wed': 0,
        'Thu': 0,
        'Fri': 0,
        'Sat': 10,
        'Sun': 20
    };
    
    const result = solution(D);
    assertDayOrder(result, expected);
});

console.log(`\n✅ ${passedTests}/${totalTests} test cases passed!`);
