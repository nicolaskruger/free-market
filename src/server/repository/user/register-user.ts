import { writeFileConverter } from "@/server/utils/file";
import { findAllUser } from "./find-all-user";
import { hasAllKeys } from "@/server/utils/verify-all-keys";

const registerUser = async (user: User) => {
  const keys: (keyof User)[] = ["email", "name", "password"];

  if (!hasAllKeys(keys, user)) throw new Error("missing parts");

  const users = await findAllUser();

  const emailAlreadyInUse = users.some((u) => u.email === user.email);

  if (emailAlreadyInUse) throw new Error("email already in use");

  writeFileConverter("./db/user.json", [...users, user]);
};

export { registerUser };
