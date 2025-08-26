# Somaiya Awards System 

## Progress Report

![Progress Bar](https://progress-bar.xyz/0/)

++++++++Why-0-Progress++++++++
  1) No Security (Even in Production)
  2) TypeScript Rewrite
  3) Jwt Token only for password reset


#### Form Section
- [] Forms Designing and Implementation
- [] Validations and Submission to Database
- [] Auto Draft Saving and Progress Checker
- [] Pagination and Rebounded Checking

#### HOI Section
- [] HOI View and Security
- [] Forms Analysis and Responses
- [] Download PDF and CSV
- [] Responses URL Security and Authentication

#### IEAC Section
- [] Implementation and Security
- [] Responses View with Export
- [] Approval and File Upload
- [] Review URL Security and Authentication

#### STUDENTS SECTION
- [] Implementation and Security
- [] Related Forms Filling 

#### PEERS SECTION
- [] Implementation and Security
- [] Related Forms Filling 

#### STUDENTS ADMIN
- [] Implementation and Security
- [] Responses View with Export of Students Form
- [] Review URL Security and Authentication
- [] Approval of Recommended forms 

#### SPORTS ADMIN
- [] Implementation and Security
- [] Responses View with Export of Sports Form
- [] Review URL Security and Authentication
- [] Approval of Recommended forms 

#### RESEARCH ADMIN
- [] Implementation and Security
- [] Responses View with Export of Research Form
- [] Review URL Security and Authentication
- [] Approval of Recommended forms 

#### HR Section
- [] Design and Implementation
- [] Correct Responses of Approved Applications
- [] OverView and Dashboard Correction
- [] Feedback Avg Score Integration
- [] Managing Users Access 
- [] URL Security and Authentication

### Documentation


#### Introduction

Somaiya Awards system is a full stack web application for all institutes under Somaiya Trust . The web application was built to ease the process of filling out the apllications for somaiya awards and selecting the best candidate of all . The web application helps the user to analyze each applicant based on their form scores and overall feedback

#### Technologies 

- Frontend : ![React](https://img.shields.io/badge/react-%2320232a.svg?style=plastic&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=plastic&logo=tailwind-css&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=plastic&logo=mui&logoColor=white) ![Three JS](https://img.shields.io/badge/Three.js-000?logo=threedotjs&logoColor=fff&style=plastic) ![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)

- Backend : ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=plastic&logo=node.js&logoColor=white) 	![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=plastic&logo=express&logoColor=%2361DAFB) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=plastic&logo=Sequelize&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=plastic&logo=JSON%20web%20tokens) ![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)

- Database : ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=plastic&logo=mysql&logoColor=white)

___

### Getting Started 

#### Installation

Clone the project

```bash
git clone "https://github.com/trushildhokiya/somaiya-awards.git"
```

Open the project directory
```bash
cd somaiya-awards
```

Setting Up Frontend

```bash
cd frontend
npm install 
```

Start your frontend React App
```bash
npm start
```

Setting Up Backend Server

```bash
cd backend
npm install
```

Once you are completed installing dependencies in backend , open config folder and edit config.json file. Replace &lt;password&gt; with you actual database password 
```json
"password": "<password>",
"database": "somaiya_awards",
```

Edit your .env file

```env
EMAIL_ID = <enter your actual email ID >
EMAIL_PASSWORD = <Enter your gmail APP key not gmail's password >
```

> **Note**
> Not editing the env file may not affect your server startup but may cause errors in actions where email is to be sent via backend server (see mailing section below)<br>This video might help you to create App Key if you dont know [Link to Youtube Video](https://www.youtube.com/watch?v=hXiPshHn9Pw)


Start your backend server
```bash
npm run dev  # to start your backend development server
npm start    # to start backend production server
```



