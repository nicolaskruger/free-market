import { writeFileConverter } from "@/server/utils/file";
import { findAllUser } from "./find-all-user";

const registerUser = async (user: User) => {
  const users = await findAllUser();

  const emailAlreadyInUse = users.some((u) => u.email === user.email);

  if (emailAlreadyInUse) throw new Error("email already in use");

  writeFileConverter("./db/user.json", [...users, user]);
};

export { registerUser };
