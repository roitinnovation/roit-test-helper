import { TemplateInstance } from "../../src/fixture/TemplateInstance";
import { UserFixture } from "./UserFixture";

TemplateInstance.registerTemplateLoader([
    new UserFixture
])