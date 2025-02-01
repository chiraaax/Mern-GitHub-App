
# 🌉 GitBridge - _GitHub Integration System_

---

## 🚀 Overview  
**GitBridge** is a cutting-edge GitHub integration system designed to streamline your workflow. The app integrates seamlessly with **GitHub's OAuth2 API** to provide users with secured authentication combined modern and feature-rich platform to interact with their GitHub profiles and repositories. GitBridge Built using the **MERN stack** and **Passport.js**, allows users to securely manage their GitHub accounts, explore repositories, interact with other users, and much more - all in an elegant, interactive interface.  

Whether you're a developer, contributor, or enthusiast, GitBridge is here to make your GitHub experience smoother and more engaging.  

---

## ✨ Key Features  
✅ **Secure Authentication**: Log in using your GitHub account with fully validated and secure authentication powered by GitHub OAuth2 and Passport.js.

✅ **Personalized Dashboard**: Access your GitHub profile with a sleek and intuitive design.  

✅ **Repository Management**:  
  - View, filter, and sort repositories.  
  - Check repository details like stars, forks, and languages used.
  - Clone repositories directly from the interface.
  - Explore popular repositories based on tech stack and language
    
✅ **User Interaction**:  
  - Scalability: Fully integrated and built to handle multiple users simultaneously.
  - Like & Engage: Appreciate other developers' work with the "Like" feature.
    
✅ **Dynamic Interface**: Responsive and elegant UI for seamless navigation.  

---

## 🛠️ Technologies Used  
| **Technology**      | **Details**                             |  
|---------------------|-----------------------------------------|  
| Frontend            | React.js, Tailwind CSS                  |  
| Backend             | Node.js, Express.js                     |  
| Database            | MongoDB                                 |  
| Authentication      | Passport.js with GitHub OAuth2 API      |  
| Version Control     | Passport.js with Git and GitHub API.    |  

---

## 📸 Screenshots  
  
1. **Login Interface**

![Login Interface](https://github.com/chiraaax/Mern-GitHub-App/blob/main/screenshots/LOGIN.PNG?raw=true)
   
2. **Sign-Up Interface**

![SignUp Interface](https://github.com/chiraaax/Mern-GitHub-App/blob/main/screenshots/SIGN-UP.PNG?raw=true)

3. **Authentication**

![Authentication](https://github.com/chiraaax/Mern-GitHub-App/blob/main/screenshots/AUTH.PNG?raw=true)


4. **Profile Dashboard**

![Profile Dashboard](https://github.com/chiraaax/Mern-GitHub-App/blob/main/screenshots/MAIN-INTERFACE(PROFILE).PNG?raw=true)


5. **User Search and Interaction**

![User Search and Interaction](https://github.com/chiraaax/Mern-GitHub-App/blob/main/screenshots/SEARCH%20PROFILES.PNG?raw=true)


6. **Popular Repository Exploration**

![Popular Repository Exploration](https://github.com/chiraaax/Mern-GitHub-App/blob/main/screenshots/REPO.PNG?raw=true)

    
---

## 🖥️ Installation and Setup  

Follow these steps to run **GitBridge** locally:  

1. **Clone the Repository**  
   ```bash  
   git clone https://github.com/chiraaax/GitBridge.git  
   ```  

2. **Navigate to the Project Directory**  
   ```bash  
   cd GitBridge  
   ```  

3. **Backend Setup**  
   Navigate to the `backend` directory and install dependencies:  
     ```bash  
     cd backend  
     npm install  
     ```  

4. **Frontend Setup**  
   Navigate to the `frontend` directory and install dependencies:  
     ```bash  
     cd ../frontend  
     npm install  
     ```  

5. **Set Up Environment Variables**  
   In the `backend` directory, create a `.env` file and add the following:  
     ```plaintext  
     GITHUB_CLIENT_ID=your_github_client_id  
     GITHUB_CLIENT_SECRET=your_github_client_secret  
     CALLBACK_URL=http://localhost:5000/auth/github/callback  
     MONGO_URI=your_mongodb_connection_string  
     ```  

6. **Start the Development Servers**  
   - Backend:  
     ```bash  
     cd ../backend  
     npm start  
     ```  
   - Frontend:  
     ```bash  
     cd ../frontend  
     npm start  
     ```  

---

## 🤝 Contribution Guidelines  
We welcome your contributions to improve **GitBridge**!  

1. Fork the repository.  
2. Create a new branch for your feature/bug fix.  
3. Submit a pull request with a clear description.  

---

## 📜 License
This project is licensed under the MIT License.

---

## 💬 Contact  

For inquiries or feedback:  
- 📧 **Email:** chiranjeewalankeshwara@gmail.com    
- 💼 **LinkedIn:** [Chiranjeewa Lankeshwara](https://www.linkedin.com/in/chiranjeewa-lankeshwara-453866305)  
- 🌐 **GitHub**: [Chiraaax](https://github.com/chiraaax)  

---

## 🌟 Acknowledgments  
Special thanks to:  
- GitHub OAuth2 for providing robust APIs.
- The developers and contributors of the MERN stack and Passport.js.  
