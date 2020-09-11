import { Given, When, Then } from 'cucumber';
import { ScenarioWorld } from '../World';
import * as expect from 'expect';
import axios from 'axios';

When('I GET the endpoint with parameter {}', { timeout: 5000 }, async function(this: ScenarioWorld, param?: string) {
    let endpoint = param ? `/hello/${param}`: '/hello';
    this.response = await axios.get<string>(`http://localhost:3000${endpoint}`);
});

Then('I receive a response containing {}', function(this: ScenarioWorld, response: string) {
    expect(this.response.status).toBe(200);
    expect(this.response.data).toBe(response);
})
