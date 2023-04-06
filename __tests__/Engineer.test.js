const Engineer = require('../lib/engineer');

describe('Engineer', () => {
  describe('Initialization', () => {
    it('should create an Engineer object with a name, id, email, and GitHub username', () => {
      const engineer = new Engineer('John', 3, 'john@example.com', 'johnGithub');

      expect(engineer.name).toEqual('John');
      expect(engineer.id).toEqual(3);
      expect(engineer.email).toEqual('john@example.com');
      expect(engineer.github).toEqual('johnGithub');
    });
  });

  describe('getGithub', () => {
    it('should return the GitHub username of the Engineer', () => {
      const engineer = new Engineer('John', 3, 'john@example.com', 'johnGithub');

      expect(engineer.getGithub()).toEqual('johnGithub');
    });
  });

  describe('getRole', () => {
    it("should return 'Engineer' as the role of the Engineer", () => {
      const engineer = new Engineer('John', 3, 'john@example.com', 'johnGithub');

      expect(engineer.getRole()).toEqual('Engineer');
    });
    });
    });
