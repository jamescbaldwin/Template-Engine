const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set identifier via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.identifier).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via promptName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue);
  expect(e.promptName()).toBe(testValue);
});

test("Can get identifier via promptIdentifier()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.promptIdentifier()).toBe(testValue);
});

test("Can get email via promptEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.promptEmail()).toBe(testValue);
});

test("promptPosition() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.promptPosition()).toBe(testValue);
});