<br />
<h1 align="center">
  <br>
  Assignment Tracker
  <br>

<h4 align="center">Leverages the Canvas LMS API to pull upcoming assignments. Results are manipulated into a simple list, sorted by due date, and can be filtered by course. Built to keep track of upcoming assignments and set priorities.</h4>

<p align="center">
  <a href="#built-with">Built With</a> •
  <a href="#screenshots">Screenshots</a> •
  <a href="#setup">Setup</a>
</p>

</h1>

## Screenshots

![screenshot1](https://github.com/pahammer/assignment-tracker/blob/main/screenshots/img1.png)
![screenshot2](https://github.com/pahammer/assignment-tracker/blob/main/screenshots/img2.png)

## Built With

- Python & Flask
- Javascript & React

## Setup

### Prerequisites

You must have an up-to-date API key. Learn more about [obtaining a Canvas API Key.](https://canvas.instructure.com/doc/api/index.html)

### Configuration

Export the following environment variables:

- `CANVAS_TOKEN`: Your api key.
- `CANVAS_SERVER`: School/Institution URL.

### Installation

To clone and run this application, you'll need Git, Python3, pip, and Nodejs installed on your computer. From your command line:

#### Frontend:

```bash
# Clone this repository
$ git clone https://github.com/pahammer/assignment-tracker

# Go into the repository and again into the react-frontend directory
$ cd assignment-tracker/react-frontend

# Install dependencies
$ npm install

# Run the frontend app
$ npm start
```

#### Backend:

```bash
# Go into the repository and again into the flask-backend directory
$ cd assignment-tracker/flask-backend
# (RECOMMENDED) Create or activate virtual env
# Install requirements
$ pip install -r requirements.txt
# Run backend app
$ python3 main.py
```

## License

MIT
