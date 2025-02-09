# Team Scribe Server

## Description

Team Scribe is a collaborative notes application that enables real-time team collaboration and note-taking. This repository contains the backend server implementation that powers the Team Scribe platform.

## Todo

- [x] simple socket connection web server
- [x] enable cors
- [ ] develop HLD
- [ ] finalize structure for socket messages
- [ ] persist user data
- [ ] manage authentication

## architecture

[High level architecture](./assets/hld.png)

## Installation

1. Clone the repository

```bash
git clone https://github.com/supriya-kotturu/team-scribe-server.git
```

2. Navigate into the project directory:

   ```bash
   cd team-scribe
   ```

3. Install the dependencies:

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   yarn run dev
   ```

5. Your server now runs on `http://localhost:3001`!

## Contributing

We welcome contributions! If you'd like to contribute to the Team Scribe, please fork the repository and submit a pull request. Make sure to follow our coding guidelines.

## License

This project is licensed under the GNU AFFERO GENERAL PUBLIC LICENSE License - see the [LICENSE](LICENSE) file for details.
