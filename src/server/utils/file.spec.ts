import fs from "fs";
import { readFileConverter, writeFileConverter } from "./file";

jest.mock("fs");

describe("file", () => {
  const mockFs = jest.mocked(fs);

  it("should retrieve some info when read file", () => {
    mockFs.readFileSync.mockReturnValue("[]" as any);

    expect(readFileConverter("./db/user.json")).toStrictEqual([]);

    expect(mockFs.readFileSync).toBeCalledWith("./db/user.json");
  });

  it("should write file", () => {
    writeFileConverter("./db/user.json", []);

    expect(mockFs.writeFileSync.mock.calls[0]).toStrictEqual([
      "./db/user.json",
      "[]",
    ]);
  });
});
