import { readFileConverter, writeFileConverter } from "@/server/utils/file";
import { registerUser } from "./register-user";
import { findAllUser } from "./find-all-user";
import { mockFindAllUser } from "./mock.spec";

jest.mock("./find-all-user");
jest.mock("@/server/utils/file");

const newUser: User = { email: "used@email", name: "jd", password: "123" };

describe("registerUser", () => {
  it("should not register an user when email is already in use", async () => {
    mockFindAllUser([{ email: "used@email", name: "jd", password: "123" }]);

    try {
      await registerUser(newUser);
      expect("not this line").not.toBe("not this line");
    } catch (error) {
      const e = error as Error;
      expect(e.message).toBe("email already in use");
    }
  });

  it("should not register when missing parts", async () => {
    mockFindAllUser([]);

    try {
      await registerUser({} as any);
      expect("not this line").not.toBe("not this line");
    } catch (error) {
      const e = error as Error;
      expect(e.message).toBe("missing parts");
    }
  });

  it("should register another user", async () => {
    mockFindAllUser([]);

    await registerUser(newUser);

    const mockWrite = jest.mocked(writeFileConverter);

    expect(mockWrite.mock.calls[0]).toStrictEqual([
      "./db/user.json",
      [newUser],
    ]);
  });
});
