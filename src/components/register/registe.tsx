"use client";

const Register = () => {
  return (
    <form action="submit">
      <label htmlFor="name">name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="email">email</label>
      <input type="text" name="email" id="email" />
      <label htmlFor="password">password</label>
      <input type="password" name="password" id="password" />
      <label htmlFor="password-2">confirm password</label>
      <input type="password-2" name="password-2" id="password-2" />
    </form>
  );
};
