import { Given, When, Then } from 'cucumber';
import { ScenarioWorld } from '../World';
import * as expect from 'expect';

Given('I have feature tests', function(this: ScenarioWorld) {
    
});

When('I run feature tests', function(this: ScenarioWorld) {
    
});

Then('I see that they run happily', function(this: ScenarioWorld) {
    expect(true).toBe(true);
})
