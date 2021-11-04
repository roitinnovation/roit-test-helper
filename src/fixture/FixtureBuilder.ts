import { Fixture } from "./Fixture";

export class FixtureBuilder {

    static add<T>(fixtureId: string, data: T): Fixture<T> {
        return new Fixture<T>(fixtureId, data)
    }
}