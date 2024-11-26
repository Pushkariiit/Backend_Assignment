Hello Team <br/>
My name is Pushkar Choudhary and I am a final year student at Indian Institute of Information Technology Vadodara. I am very thankful to the team for giving me the opportunity to show my skiils through this assignment.
<br/>
I will be highly thankful to you for giving me the opportunity to interview for the role. <br/>


Description of the backend Assignment: <br/>

I have implemented three functionalities : <br/>
First is Authentication (Register and sign in functionality implemented using JWT) <br/>
Second is Authorization (helps in role based access control) <br/>
Third is Role Based Access Control (Admin can see the list of all users and admin and it is a protected route so other than admin no one can access this dashboard) <br/>

For accomplishing it, I have made multiple Apis to achieve this. <br/>
For the frontend part I have used simple User Interface (As It is a backend Assignment) <br/>
In the frontend section there are 5 endpoints: <br/>
1) '/' -> Home Page (This page contains the options of Register and Login) <br/>
2) '/register' -> Registration Page (This page contains 2 roles first is User and second is Admin) -> Role would not be asked in the website when it will go in production, but it will ensure smooth evalution of Assignment) <br/>
3) '/login' -> Login Page (User name should be unique) <br/>
4) '/user' -> during the login if the credentials are for User role then userDashboard will open (It is protected Route) -> Just a normal user interface <br/>
5) '/admin' -> during the login if the credentials are for Admin role then AdminDashboard will open (it is protected Route) -> this page contains list of all users and admins present in the database. <br/>

Now I am attaching some sample Api Endpoints from Postman : <br/>

1) Register Endpoint -> http://localhost:5000/auth/register <br/>
![image](https://github.com/user-attachments/assets/4c545bc4-cbae-4ca3-8579-f1b962af83f6)
2) Login Endpoint -> http://localhost:5000/auth/login <br/>
![image](https://github.com/user-attachments/assets/a8aa7f0f-403f-4cd2-b0fe-142dbb1643ba)
3) Admin Dashboard -> http://localhost:5000/user/user-dashboard <br/>
![image](https://github.com/user-attachments/assets/bb35bc59-2b21-4948-812b-55db3a530fea)
4) User Dashboard -> http://localhost:5000/user/user-dashboard <br/>
![image](https://github.com/user-attachments/assets/8efe77fb-1603-4e28-95e3-70e484044dbf)
5) All Users -> http://localhost:5000/admin/all-users <br/>
![image](https://github.com/user-attachments/assets/82203822-6223-4a72-901b-fdf49a9c6de7)

For the frontend part please refer to video link : https://drive.google.com/file/d/1qZLcGlYCw5LP7McFLCXyl96ij6mu--fQ/view?usp=sharing <br/>

Now I will guide you through the steps to clone this project in your local machine <br/>
Step 1 -> Clone the repository : ``` https://github.com/Pushkariiit/Backend_Assignment ``` <br/>
Step 2 -> cd Backend_Assignment <br/>
Step 3 -> ``` npm install ``` <br/>
Step 4 -> ``` npm start ``` <br/>

Thanks & Regards
