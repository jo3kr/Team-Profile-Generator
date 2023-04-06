const Intern = require('../lib/intern');

describe('Intern', () => {
  describe('Initialization', () => {
    it('should create an Intern object with a name, id, email, and school', () => {
      const intern = new Intern('Michael', 4, 'michael@example.com', 'State University');

      expect(intern.name).toEqual('Michael');
      expect(intern.id).toEqual(4);
      expect(intern.email).toEqual('michael@example.com');
      expect(intern.school).toEqual('State University');
    });
  });

  describe('getSchool', () => {
    it('should return the school of the Intern', () => {
      const intern = new Intern('Michael', 4, 'michael@example.com', 'State University');

      expect(intern.getSchool()).toEqual('State University');
    });
  });

  describe('getRole', () => {
    it("should return 'Intern' as the role of the Intern", () => {
      const intern = new Intern('Michael', 4, 'michael@example.com', 'State University');

      expect(intern.getRole()).toEqual('Intern');
    });
  });
});