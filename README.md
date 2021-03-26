# Plantica

## Overview

From botanists to ecologists, hikers to hunters, the world is filled with likeminded nature enthusiasts wanting to record what we find. Plantica is a tool to help users research and record plant species, as well as offer information on different flora.

## Table of contents

- [About](#about)
  - [Built using](#built-using)
- [Link to application](#link-to-deployed-application)
- [Contributors](#contributors)
- [Initial Idea](#initial-idea)
- [Functionality](#functionality)
- [Installation](#installation)
- [Further Development](#further-development)
- [License](#license)

---

## About

There are few apps available at the moment designed for this demographic. There are dummies guide for caring for house plants or identifying different plants by a photo targeted towards gardening enthusiasts, but nothing catering for those wanting a high level of detail.
Plantica aims to provide this by streamlining the process of finding a species of plant and saving it to your collection as well as uploading your own collections to a database, bringing together likeminded individuals with a shared passion for botany.

#### User story

**AS A** botanist and nature enthusiast,  
**I WANT** an application to research plants and save my own collections online,  
**SO THAT** I can keep track of my samples and learn more about the world of botany.

## Built using

- **React**
- **Node.js**
- **Express** for the server
- **MongoDB** for the database with a **Mongoose** ORM
- **Semantic UI** as the CSS framework
- **JWT** for encryption
- **JOI** for data validation
- **.env** to protect API keys in Node with environment variables
- **Cloudinary** for image upload functionality
- **Trefle API** to retrieve plant data
- **Open Weather API** for location based weather data
- **Moment.js** for displaying dates and times
- **Framer Motion** for animation

---

## Link to deployed application

View the live application on [Heroku](https://plantica.herokuapp.com/).

---

## Contributors

- [Pawel Nawoj](https://github.com/PavN93)
- [Shivey Singh](https://github.com/genius-pending)
- [Hannah Sones](https://github.com/HannahSones)

---

## Initial Idea

Once we had the idea of what we wanted to develop, we worked on creating the initial wireframes to decide the design of the app and what pages were required. This developed over time as we added features and functionality and adapted styling to suit both desktop and mobile devices.

![Plantica wireframes](https://github.com/PavN93/Project-3/blob/han/updateReadMe/client/public/assets/PlanticaWireframes.png)

---

## Functionality

The functionality differs depending on if a user is logged in or not. To incentivise using the application, more features and functionality is available to those users who have an account.

1. Plantica homepage:

![Plantica Page](https://github.com/PavN93/Project-3/blob/han/updateReadMe/client/public/assets/PlanticaHomepage.png)
From the homepage all users are able to explore a range of plants using the search functionality which fetches data from the Trefle Api. Each plant can be viewed individually to find out more information and if you are logged in, you have the option to save these plants to your personal collection.
There is also a 'Plant of the Day' feature which gives a random plant each day to users when revealed.

![Search feature](https://github.com/PavN93/Project-3/blob/han/updateReadMe/client/public/assets/PlanticaSearch.png)

![Plant of the Day feature](https://github.com/PavN93/Project-3/blob/han/updateReadMe/client/public/assets/PlanticaPlantoftheDay.png)

If you have an account and are logged in, then you can then access a profile page from the sidebar menu as well as an upload page to add your own plants to your database.

2.  Login page:

![Profile Page](https://github.com/PavN93/Project-3/blob/han/updateReadMe/client/public/assets/PlanticaLoginValidation.png)
    
When logging into your account, the form uses validation to ensure credentials are valid and match.


3.  User profile:
  
![Profile Page](https://github.com/PavN93/Project-3/blob/han/updateReadMe/client/public/assets/PlanticaProfile.png)
    
When a user creates an account the data provided will be automatically populated in the profile page, including username, date of birth, joined date and location.
There is the option to add your own profile image also.

The profile page houses other users within the app which you can search through and also is where you will find your own plant collections.
![Friends List](https://github.com/PavN93/Project-3/blob/han/updateReadMe/client/public/assets/PlanticaFriendsList.png)


4.  Upload page:
![Upload page](https://github.com/PavN93/Project-3/blob/han/updateReadMe/client/public/assets/PlanticaUpload.png)

This page allows users to add their own plants to their collections which will then be viewable via the profile page.


---

## Installation

- Clone the Git repository onto your local machine
- Navigate to the folder where the repository exists
- Run the command `$ npm i` in BOTH the root folder and the client folder
- Then run the command `npm run dev`
- Your browser will automatically load and navigate to `localhost:3000`
- The app uses nodemon so any changes will implement automatically

---

## Further Development

Moving forward with this application, these are the key areas we'd like to develop.

- **Messaging functionality**    
While you can currently search for and view friends, we'd like to add the ability to exchange messages using socket.io.

- **Multiple collections**    
At present, users only have one database. It would be nice to be able to select which database you'd like to upload or save a plant to and have the option to group plants by collection instead of having just one collection.

- **Searching for users**   
Currently, users can only search for others in the database by username. We would like to add the ability to filter users by location, number of uploads etc.

---

## License

Licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

![MIT license](https://img.shields.io/badge/license-MIT-brightgreen)
