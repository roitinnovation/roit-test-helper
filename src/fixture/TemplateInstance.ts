import { Fixture } from "./Fixture"
import { TemplateLoader } from "./TemplateLoader"

export class TemplateInstance {

    private static instance: TemplateInstance = new TemplateInstance

    private instanceMap: Map<string, Fixture<any>> = new Map

    private constructor() {}

    static getInstance() {
        return this.instance
    }

    static registerTemplateLoader(loaders: Array<TemplateLoader>) {
        loaders.forEach(loader => loader.load())
    }

    static register<T>(fixture: Fixture<T>) {
        this.getInstance().instanceMap.set(fixture.fixtureId, fixture)
    }

    static getFixture<T>(fixtureId: string): T | undefined {
        return this.getInstance().instanceMap.get(fixtureId)?.data
    }
}