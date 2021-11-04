import { TemplateInstance } from "../src/fixture/TemplateInstance";
import { User } from "./model/User";

describe('TemplateInstance', () => {

  it('user fixture 1 test', async () => {

    const user = TemplateInstance.getFixture<User>('USER_FIXTURE_1')

    expect(user?.name).toBe("Maria")
    expect(user?.address).toBe("Addres 1")
    expect(user?.age).toBe(40)
  });

  it('user fixture 2 test', async () => {

    const user = TemplateInstance.getFixture<User>('USER_FIXTURE_2')

    expect(user?.name).toBe("Maria")
    expect(user?.address).toBe("Addres 2")
    expect(user?.age).toBe(40)
  });

  it('user fixture not found test', async () => {

    const user = TemplateInstance.getFixture<User>('USER_FIXTURE_ANY')

    expect(user).toBe(undefined)
  });

});