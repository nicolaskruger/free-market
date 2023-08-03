import { writeFileConverter } from "@/server/utils/file";
import { mockFindAllUser } from "./find-all-user.spec";
import { registerUser } from "./register-user";

jest.mock("./find-all-user");
jest.mock("@/server/utils/file");

const newUser: User = { email: "used@email", name: "jd", password: "123" };

describe("registerUser", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should not register an user when email is already in use", async () => {
    mockFindAllUser([{ email: "used@email", name: "jd", password: "123" }]);

    try {
      await registerUser({ email: "used@email" } as any);
      expect("not this line").not.toBe("not this line");
    } catch (error) {
      const e = error as Error;
      expect(e.message).toBe("email already in use");
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
