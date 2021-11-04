import { TemplateInstance } from "./TemplateInstance";

export class Fixture<T> {

    constructor(public fixtureId: string, public data: T) {
        TemplateInstance.register(this)
    }
}