import { readFileConverter } from "../utils/file";

const findAllUser = () => {
  return readFileConverter("./db/user.json") as User[];
};

export { findAllUser };
