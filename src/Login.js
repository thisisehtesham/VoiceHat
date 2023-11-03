import React, { useState } from "react";
import "./css/login.css"
import { auth } from "./firebase";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
    const [signup, setSignUp] = useState(false);
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const register = (event) => {
        event.preventDefault();

        if(!name) {
            return alert("Name is required")
        }
        if(!photoURL) {
            return alert("PhotoURL is required")
        }
        if(!email) {
            return alert("Email is required")
        }
        if(!password) {
            return alert("Password is required")
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: photoURL
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    photoURL: photoURL,
                    displayName: name
                }))
            })
        }).catch((error) => {
            return alert(error);
        });

        setName("");
        setPhotoURL("");
        setEmail("");
        setPassword("");
    }

    const signIn = (event) => {
        event.preventDefault();

        if(!email) {
            return alert("Email is required")
        }
        if(!password) {
            return alert("Password is required")
        }

        auth.signInWithEmailAndPassword(email, password)
        .then(({user}) => {
            dispatch(login({
                email: user.email,
                uid: user.uid,
                photoURL: user.photoURL,
                displayName: user.displayName
            }))
        }).catch((error) => {
            return alert(error);
        })
    }

    return (
        <div className="loginScreen">
            <img
                src={require('./Images/Cover.png')}
                alt=""
            ></img>

            {signup === true ? (
                <form onSubmit={register}>
                    <input type="text" placeholder="Full Name" value={name} onChange={(event) => setName(event.target.value)}/>
                    <input type="text" placeholder="Profile Picture URL" value={photoURL} onChange={(event) => setPhotoURL(event.target.value)}/>
                    <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>

                    <input type="submit" value="Sign up" />

                    <h4>
                        Already on LinkedIn? <span onClick={(event) => setSignUp(false)}>Sign in</span>
                    </h4>
                </form>
            ) : (
                <form onSubmit={signIn}>
                    <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>

                    <input type="submit" value="Sign in" />

                    <h4>
                        New to LinkedIn? <span onClick={(event) => setSignUp(true)}>Register now</span>
                    </h4>
                </form>
            )}
        </div>
    );
}

export default Login;
