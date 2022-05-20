// IMPORT MODULES under test here:
import { renderItem } from '../render-utils.js';

const test = QUnit.test;

test('time to test renderItem', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>1 apple</li>`;

    const item = {
        qty: '1',
        name: 'apple',
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderItem(item);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
