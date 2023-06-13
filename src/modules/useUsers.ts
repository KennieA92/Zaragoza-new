import { auth } from '../firebase.js'
import { onAuthStateChanged, signInWithEmailAndPassword, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, updateProfile } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const useUsers = () => {
    const name = ref('');
    const surname = ref('');
    const email = ref('');
    const password = ref('');
    const user = ref();
    const router = useRouter();


    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: "select_account"
        });
        await signInWithPopup(auth, provider)
            .then((result) => {

                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                if (credential == null) return;
                const token = credential.accessToken;
                // The signed-in user info.
                user.value = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const signInWithFacebook = async () => {
        const provider = new FacebookAuthProvider();
        provider.setCustomParameters({
            'display': 'popup'
        });
        await signInWithPopup(auth, provider)
            .then((result) => {

                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                if (credential == null) return;
                const token = credential.accessToken;
                // The signed-in user info.
                user.value = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const login = () => {
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                user.value = userCredential.user;
                router.push('/');
                email.value = '';
                password.value = '';
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
            });
    }

    const logout = () => {
        signOut(auth).then(() => {
            user.value = null;
        }).catch((error) => {
            console.log(error);
        });
    }

    const registerUser = () => {
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then(() => {
                if (auth.currentUser) {
                    updateProfile(auth.currentUser, {
                        displayName: name.value + ' ' + surname.value,
                    }).then(() => {
                        router.push('/');
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password or email.');
                } else if (errorCode === 'auth/email-already-in-use') {
                    alert('Email already in use.');
                } else if (errorCode === 'auth/invalid-email') {
                    alert('Invalid email.');
                } else {
                    alert(errorMessage);
                }
            });
    }

    const isLoggedIn = ref(false);
    const isUserLoggedIn = async () => {
        user.value = auth.currentUser
        onAuthStateChanged(auth, (user) => {
            if (user) {
                isLoggedIn.value = true;
            } else {
                isLoggedIn.value = false;
            }
        });
    }

    return {
        login,
        logout,
        registerUser,
        isLoggedIn,
        isUserLoggedIn,
        email,
        password,
        user,
        name,
        surname,
        signInWithGoogle,
        signInWithFacebook
    }
}

export default useUsers