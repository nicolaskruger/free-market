import { findAllUser } from "./find-all-user";

const mockFindAllUser = (users: User[]) => {
  jest.mocked(findAllUser).mockResolvedValue(users);
};

export { mockFindAllUser };

describe("just imports :)", () => {
  it("should be true", () => {
    expect(true).toBeTruthy();
  });
});
