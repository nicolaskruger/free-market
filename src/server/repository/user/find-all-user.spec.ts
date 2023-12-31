import { readFileConverter } from "@/server/utils/file";
import { findAllUser } from "./find-all-user";

jest.mock("@/server/utils/file");

describe("find all user", () => {
  it("should find all user", async () => {
    jest.mocked(readFileConverter).mockReturnValue([]);

    const user = await findAllUser();

    expect(user).toStrictEqual([]);
  });
});
