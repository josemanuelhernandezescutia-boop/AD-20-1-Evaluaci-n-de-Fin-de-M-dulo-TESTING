const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

// 3) findByEmail(): devuelve el usuario cuando EXISTE
test("findByEmail() devuelve el usuario cuando existe", () => {
  const ctrl = new UserController();
  const u1 = new User(10, "María", "maria@generation.org");
  const u2 = new User(11, "Pepe", "pepe@generation.org");
  ctrl.add(u1);
  ctrl.add(u2);

  const found = ctrl.findByEmail("pepe@generation.org");
  expect(found).toBe(u2);
  expect(found.getName()).toBe("Pepe");
});

// 4) findByEmail(): devuelve undefined cuando NO existe
test("findByEmail() devuelve undefined cuando no existe", () => {
  const ctrl = new UserController();
  ctrl.add(new User(10, "María", "maria@generation.org"));

  const found = ctrl.findByEmail("noexiste@generation.org");
  expect(found).toBeUndefined();
});

// 5) findById(): devuelve el usuario cuando EXISTE
test("findById() devuelve el usuario cuando existe", () => {
  const ctrl = new UserController();
  const u1 = new User(100, "Luz", "luz@generation.org");
  const u2 = new User(200, "Sol", "sol@generation.org");
  ctrl.add(u1);
  ctrl.add(u2);

  const found = ctrl.findById(200);
  expect(found).toBe(u2);
  expect(found.getEmail()).toBe("sol@generation.org");
});

// 6) findById(): devuelve undefined cuando NO existe
test("findById() devuelve undefined cuando no existe", () => {
  const ctrl = new UserController();
  ctrl.add(new User(100, "Luz", "luz@generation.org"));

  const found = ctrl.findById(999);
  expect(found).toBeUndefined();
});
