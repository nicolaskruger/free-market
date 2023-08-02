import { readFileConverter } from "@/server/utils/file";

const findAllUser = async () => {
  return readFileConverter("./db/user.json") as User[];
};

export { findAllUser };
