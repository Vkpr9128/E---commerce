# Employee review system
The Employee Review System is a web application that allows employees to submit feedback towards each other's performance. The system includes admin view capabilities such as employee management and performance review assignment.
![2](https://github.com/erpankajk4/Employee_Review_System/assets/118353291/ad8fd8a2-2d54-401c-9728-92f9a7f1924b)

## DEMO Video on Youtube:


## Features
- Admin view for managing employees and performance reviews
- Employee view for submitting feedback
- Login for both admin and employee
- Employee registration
- Admin-only capability to promote employees to admin status

### Admin view
- Add/remove/update/view employees
- Add/update/view performance reviews
- Assign employees to participate in another employee's performance review_


### Employee view
- List of performance review requiring feedback
- Submit feedback

## Installation

##### Install NPM dependencies

`npm install`

##### Start your app

`npm start`

#### The Server should now be running at http://localhost:8000/


## 🛠️ Technologies Used
- Bootstrap
- NodeJS
- MongoDB
- ExpressJS
- EJS

### 📚 Libraries:
- passport-jwt
- connect-flash
- express-ejs-layout
- passport-local
- ejs
- mongoose
- express-session
- bcryptjs
- cookie-parser
- connect-mongo
- dotenv
- express

## Folder Structure
📦Employee-review-system<br>
 ┣ 📂config<br>
 ┃ ┣ 📜middleware.js<br>
 ┃ ┣ 📜mongoose.js<br>
 ┃ ┗ 📜passport-local-strategy.js<br>
 ┣ 📂controllers<br>
 ┃ ┣ 📜dashboard_controller.js<br>
 ┃ ┣ 📜review_controller.js<br>
 ┃ ┗ 📜users_controller.js<br>
 ┣ 📂DEMO - Here, app screenshots are present<br>
 ┣ 📂models<br>
 ┃ ┣ 📜review.js<br>
 ┃ ┗ 📜user.js<br>
 ┣ 📂routes<br>
 ┃ ┣ 📜index.js<br>
 ┃ ┣ 📜reviews.js<br>
 ┃ ┗ 📜users.js<br>
 ┣ 📂views<br>
 ┃ ┣ 📜add_employee.ejs<br>
 ┃ ┣ 📜admin_dashboard.ejs<br>
 ┃ ┣ 📜edit_employee.ejs<br>
 ┃ ┣ 📜employee_dashboard.ejs<br>
 ┃ ┣ 📜layout.ejs<br>
 ┃ ┣ 📜user_sign_in.ejs<br>
 ┃ ┣ 📜user_sign_up.ejs<br>
 ┃ ┗ 📜_header.ejs<br>
 ┣ 📜.env<br>
 ┣ 📜.gitIgnore<br>
 ┣ 📜index.js<br>
 ┣ 📜package-lock.json<br>
 ┣ 📜package.json<br>
 ┗ 📜README.md<br>

 ## Credits
This project was developed by [Your Name] as a coding exercise. It is not intended for production use.

## License
This project is licensed under the MIT License. Feel free to use and modify the code as you see fit.
![0](https://github.com/erpankajk4/Employee_Review_System/assets/118353291/5a840a9f-26e6-45cf-8f71-64b1c4f1a2e5)
![1](https://github.com/erpankajk4/Employee_Review_System/assets/118353291/f89bb587-62e1-4bc7-8e88-c4a2453182e3)
![3](https://github.com/erpankajk4/Employee_Review_System/assets/118353291/a356b724-7e0d-40af-9862-54b174736bac)
![4](https://github.com/erpankajk4/Employee_Review_System/assets/118353291/71b96f7b-fc0c-467d-ac54-71272b5f526d)
![5](https://github.com/erpankajk4/Employee_Review_System/assets/118353291/2c06c875-27d9-44da-8588-8df638813404)


