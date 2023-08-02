import fs from "fs";

const writeFileConverter = <T>(path: "./db/user.json", content: T) => {
  fs.writeFileSync(path, JSON.stringify(content));
};

export { writeFileConverter };

const readFileConverter = <T>(path: "./db/user.json"): T => {
  const json = `${fs.readFileSync(path)}`;

  const ret: T = JSON.parse(json);

  return ret;
};

export { readFileConverter };
