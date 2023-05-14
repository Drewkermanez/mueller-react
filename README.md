# Dependencies

[Git](https://git-scm.com/)

[NodeJS](https://nodejs.org/) - The LTS version should be sufficient.

[Visual Studio Code](https://code.visualstudio.com/) - Or your preferred development environment.

# Setup

Make a fork of this repository into your own Github account.

Clone the forked repository onto your machine.

Open the folder in Visual Studio Code.
Open a Terminal window in the folder:  Terminal->New Terminal

Run:

`npm run install-all`

Once that has finished running, execute:

`npm start`

This will automatically open a browser window at [http://localhost:3000/](http://localhost:3000/) (this may take a minute or so)

You can verify the server is running by navigating to [http://localhost:5000/](http://localhost:5000/)

If there are any problems with the Dependencies or Setup portions of this please do not hesitate to reach out to us.

---

# Instructions

### Overview

The basic requirement is to display a list of students and their grades in a grid/table, formatted as per the following details.

### Requirements

- The grid needs to be two columns with headings.
- The first column is "Name": the names need to be displayed in 'Last Name, First Name' format and sorted alphabetically.
- The second column is "Grade".
- If the student's grade is below 50, do not display that row in the grid.
- If the student's grade is below 65, the text for the grade should be colored Red.
- If the student's grade is 85 or above, the text for the grade should be colored Green.

### Details

The starting point for your web application will be '**client/src/App.js**'

The student data can be retrieved at an API endpoint URL '/grades' with a HTTP GET request.  The data will be a JSON array with the following interface:

```
interface student
  id integer
  first_name string
  last_name string
  grade integer
```

The front-end site is set up to automatically proxy requests to the server, so you shouldn't need to specify the port number in the URL.

You may install any additional packages you would like to the project.  Also please feel free to research the web as needed!

# Delivery

- Commit your changes and push to upstream/remote.  
- Share the link of your forked repository to us.
