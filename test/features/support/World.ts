import * as Cucumber from 'cucumber';

export class ScenarioWorld {
    response: any
}

Cucumber.setWorldConstructor(ScenarioWorld);
