const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create a Manager object with a name, id, email, and office number", () => {
      const manager = new Manager("Mathew", 2, "mathew@example.com", 100);

      expect(manager.name).toEqual("Mathew");
      expect(manager.id).toEqual(2);
      expect(manager.email).toEqual("mathew@example.com");
      expect(manager.officeNumber).toEqual(100);
    });
  });

  describe("getRole", () => {
    it("should return 'Manager' as the role of the Manager", () => {
      const manager = new Manager("Mathew", 2, "mathew@example.com", 100);

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
