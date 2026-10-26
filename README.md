# TV Maze

>The JavaScript capstone project is a web application based on an external API about TV series and movies.
This project was developed using ES6 and Webpack. We use the Kanban board with a GitHub project that translates the requirements into a set of tasks to organize our work. The counter functionality was tested using the jest library. We follow Gitflow and solved the conflicts in our code. Perform code reviews for our partner's code. Created dynamically the homepage, the popup, and the list of episode contents. Browser storage saves users' comments and likes.


## Data and storage

Series, searches, show details, and episodes come from the TVMaze API.
Search requests need a non-empty `q` value, for example:
`https://api.tvmaze.com/search/shows?q=girls`.

The original Involvement API is unavailable. Likes and comments now use
`localStorage`: they persist in the current browser and site origin, but are not
shared with other users or devices. Each show can be liked once per browser.
Clearing site data removes these interactions. Historical interactions from the
old API are not available. A working backend is required to restore shared likes
and comments. The app displays an error if browser storage cannot save a change.

## Built With

- HTML
- JavaScript
- CSS
- Git
- Webpack
- npm
- jest


## Live Demo (if available)

[Project video](https://drive.google.com/file/d/1UwEtC5ViJGbmrAZgBcfgQOLp0rIbuxcp/view?usp=sharing)

[Live Demo](https://elsonotake.github.io/TVMaze/dist/)


## Getting Started

To get a local copy, follow these simple steps.

### Prerequisites

Web browser installed

### Setup

Cloning a repository

- On GitHub.com, navigate to the main page of the repository;

- Above the list of files, click "Code" button;

- Copy the URL to clone the repository.

  - To clone the repository using HTTPS : `https://github.com/ElsonOtake/TVMaze.git`

  - To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority : `git@github.com:ElsonOtake/TVMaze.git`

  - To clone a repository using GitHub CLI : `gh repo clone ElsonOtake/TVMaze`

- Open Terminal;

- Change the current working directory to the location where you want the cloned directory;

- Type `git clone`, and then paste the URL you copied earlier;

- run `npm install` to install all dependencies;

- run `npm run start` to start the application locally.


## Authors

👤 **Andrés Garzon**

- GitHub: [@githubhandle](https://github.com/andgarzonmal)
- Twitter: [@twitterhandle](https://twitter.com/twitterhandle)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/andres-garzon-maldonado-951a2a180/)

👤 **Elson Otake**

- GitHub: [@elsonotake](https://github.com/elsonotake)
- Twitter: [@elsonotake](https://twitter.com/elsonotake)
- LinkedIn: [elsonotake](https://linkedin.com/in/elsonotake)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).


## Show your support

Give a ⭐️ if you like this project!


## Acknowledgments

- Microverse
- W3Schools
- Stack Overflow


## 📝 License

This project is [MIT](./MIT.md) licensed.
