import { FixtureBuilder } from "../../src/fixture/FixtureBuilder";
import { TemplateLoader } from "../../src/fixture/TemplateLoader";
import { User } from "../model/User";

export class UserFixture implements TemplateLoader {

    load(): void {
        
        FixtureBuilder.add<User>('USER_FIXTURE_1', {
            Addresss: 'Address 1',
            age: 40,
            name: 'Maria'
        })

        FixtureBuilder.add<User>('USER_FIXTURE_2', {
            Addresss: 'Address 2',
            age: 40,
            name: 'Maria'
        })

        FixtureBuilder.add<User>('USER_FIXTURE_3', {
            Addresss: 'Address 3',
            name: 'Maria'
        })
    }

}