const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an Employee object with a name, id, and email", () => {
      const employee = new Employee("Joel", 1, "joel@example.com");

      expect(employee.name).toEqual("Joel");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("joel@example.com");
    });
  });

  describe("getName", () => {
    it("should return the name of the Employee", () => {
      const employee = new Employee("Joel", 1, "joel@example.com");

      expect(employee.getName()).toEqual("Joel");
    });
  });

  describe("getId", () => {
    it("should return the id of the Employee", () => {
      const employee = new Employee("Joel", 1, "joel@example.com");

      expect(employee.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("should return the email of the Employee", () => {
      const employee = new Employee("Joel", 1, "joel@example.com");

      expect(employee.getEmail()).toEqual("joel@example.com");
    });
  });

  describe("getRole", () => {
    it("should return 'Employee' as the role of the Employee", () => {
      const employee = new Employee("Joel", 1, "joel@example.com");

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
