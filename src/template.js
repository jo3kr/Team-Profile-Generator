function createManagerCard(manager) {
    return `
      <div class="col-md-4">
        <div class="card">
          <div class="card-header bg-primary text-white">
            ${manager.getName()} - Manager
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: ${manager.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="list-group-item">Office number: ${manager.officeNumber}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
  
  function createEngineerCard(engineer) {
    return `
      <div class="col-md-4">
        <div class="card">
          <div class="card-header bg-primary text-white">
            ${engineer.getName()} - Engineer
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
  
  function createInternCard(intern) {
    return `
      <div class="col-md-4">
        <div class="card">
          <div class="card-header bg-primary text-white">
            ${intern.getName()} - Intern
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
  
  function generateHTML(team) {
    const cards = [];
  
    team.forEach(member => {
      if (member.getRole() === 'Manager') {
        cards.push(createManagerCard(member));
      } else if (member.getRole() === 'Engineer') {
        cards.push(createEngineerCard(member));
      } else if (member.getRole() === 'Intern') {
        cards.push(createInternCard(member));
      }
    });
  
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header class="bg-primary text-white text-center py-4 mb-5">
        <h1>My Team</h1>
      </header>
      <div class="container">
        <div class="row" id="team-container">
        ${cards.join('\n')}
        </div>
      </div>
    
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>
</body>
</html>
  `;
}

module.exports = generateHTML;