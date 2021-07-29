import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import loginImg from '../../../images/loginBg.png';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [alreadyUser, setAlreadyUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        img: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    const handleLoginForm = e => {
        if (!alreadyUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUser = { ...user };
                    newUser.isSignedIn = true;
                    newUser.success = true;
                    updateUser(user.name)
                    idToken();
                    setUser(newUser);
                    setLoggedInUser(newUser);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUser = { ...user };
                    newUser.isSignedIn = false;
                    newUser.success = false;
                    newUser.error = error.message;
                    setUser(newUser);
                    setLoggedInUser(newUser)
                });
        }
        if (alreadyUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUser = { ...user };
                    newUser.name = res.user.displayName;
                    newUser.isSignedIn = true;
                    newUser.success = true;
                    idToken();
                    setUser(newUser);
                    setLoggedInUser(newUser);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUser = { ...user };
                    newUser.isSignedIn = false;
                    newUser.success = false;
                    newUser.error = error.message;
                    setUser(newUser);
                });
        }
        e.preventDefault();
    }

    const handleBlur = e => {
        let isSubmitted = false;
        if (e.target.name === 'email') {
            const re = /\S+@\S+\.\S+/;
            isSubmitted = re.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const re = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            isSubmitted = re.test(e.target.value);
        }
        if (e.target.name === 'name') {
            isSubmitted = true;
        }
        if (isSubmitted) {
            const userData = { ...user };
            userData[e.target.name] = e.target.value;
            setUser(userData);
        }
    }

    const updateUser = (name) => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
        }).then(() => {
            console.log('profile update successfully')
        }).catch((error) => {
            console.log(error)
        });
    }
    const handleFbSignIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((res) => {
                console.log(res.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((res) => {
                const newUser = { ...user };
                newUser.name = res.user.displayName;
                newUser.img = res.user.photoURL;
                newUser.isSignedIn = true;
                newUser.success = true;
                idToken()
                setUser(newUser);
                setLoggedInUser(newUser);
                history.replace(from);
            })
            .catch((error) => {
                const newUser = { ...user };
                newUser.isSignedIn = false;
                newUser.success = false;
                newUser.error = error.message;
                setUser(newUser);
                setLoggedInUser(newUser)
            });
    }

    const idToken = () => {
        firebase.auth().currentUser.getIdToken( true)
        .then(idToken => {
           sessionStorage.setItem('token', JSON.stringify(idToken));
          }).catch(error=> {
            console.log(error)
          });  
    }
    return (
        <section className="login-container container">
            <div className="row d-flex align-items-center">
                <div className="col-md-5">
                    <h4 className="text-center">{!alreadyUser ? 'Sign up' : 'Sign in'}</h4>
                    <h6 className="text-center text-danger">{!user.success && user.error}</h6>
                    <form onSubmit={handleLoginForm}>
                        {
                            !alreadyUser && <label for="userName" class="form-label">User Name</label>
                        }
                        {
                            !alreadyUser && <input onBlur={handleBlur} type="text" name='name' class="form-control" placeholder="User Name" />
                        }
                        <label for="email" class="form-label">Email</label>
                        <input onBlur={handleBlur} type="email" name="email" class="form-control" placeholder="Email" />

                        <label for="password" class="form-label">Password</label>
                        <input onBlur={handleBlur} type="password" name="password" class="form-control" placeholder="password" />
                        {!alreadyUser && <small>*at last one lowercase, one uppercase,one digit, and it should have 8 characters long</small>}<br /><br />

                        <input onChange={() => setAlreadyUser(!alreadyUser)} type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Already User?</label><br /><br />

                        <button type="submit" class="btn">{alreadyUser ? 'Sign in' : 'Sign Up'}</button>
                    </form>
                    <div className="social-sign-in">
                        <button onClick={handleGoogleSignIn} className="btn">Google Sign In</button>
                        <button onClick={handleFbSignIn} className="btn">Facebook Sign In</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid login-img" src={loginImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Login;