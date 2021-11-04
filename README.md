# ROIT Test Helper

## Fixture
Use fixture to generate mass of data

### Config

In package.json or jest.config.js add config

```
In package.json

"jest": {
    .....
    "setupFilesAfterEnv": [
        "<rootDir>/test/fixture/index.ts"
    ],
    .....
},

In jest.config.js

module.exports = {
  ...
  setupFilesAfterEnv: [
    "<rootDir>/test/fixture/index.ts"
  ]
};
```
### Example

```
Any model

export class User {

    name: string

    age: number

    address: string
}

The Fixture (path test/fixture/UserFixture.ts)

import { FixtureBuilder } from "roit-test-helper";
import { TemplateLoader } from "roit-test-helper";
import { User } from "../model/User";

export class UserFixture implements TemplateLoader {

    load(): void {
        
        FixtureBuilder.add<User>('USER_FIXTURE_1', {
            address: 'Addres 1',
            age: 40,
            name: 'Maria'
        })

        FixtureBuilder.add<User>('USER_FIXTURE_2', {
            address: 'Addres 2',
            age: 40,
            name: 'Maria'
        })
    }

}

Register Template Loader (path test/fixture/index.ts)

import { TemplateInstance } from "roit-test-helper";
import { UserFixture } from "./UserFixture";

TemplateInstance.registerTemplateLoader([
    new UserFixture,
    ...
])

Get fixture

import { TemplateInstance } from "roit-test-helper";

it('user fixture 1 test', async () => {

    const user = TemplateInstance.getFixture<User>('USER_FIXTURE_1')

    expect(user?.name).toBe("Maria")
    expect(user?.address).toBe("Addres 1")
    expect(user?.age).toBe(40)
});

```
