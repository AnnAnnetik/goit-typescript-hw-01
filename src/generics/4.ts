type Userr = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const user1: Userr = {
  name: "",
  surname: "",
  email: "",
  password: "",
};

function createOrUpdateUser(initialValues: Partial<Userr>): Userr {
  return { ...user1, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
