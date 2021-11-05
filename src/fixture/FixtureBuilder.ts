import { Fixture } from "./Fixture";

export class FixtureBuilder {

    static add<T>(fixtureId: string, data: Partial<T>): Fixture<T> {
        return new Fixture<T>(fixtureId, { ...data } as any)
    }
}