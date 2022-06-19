import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { getCredential } from '../features/user/userSlice';
import getEmail from './Auth';

const clientId = "111507259213-b25g3f9kc2gg1lqlded9lie7qv1ahfhi.apps.googleusercontent.com";

function LoginButton({ setEmail }) {
    const dispatch = useDispatch();
    const onSuccess = (res) => {
        console.log('Login Success! Current User:', res.profileObj,);
        // dispatch(getCredential(res.profileObj));
        setEmail(res?.profileObj?.email);
        getEmail(res?.profileObj?.email);
    };
    const onFailure = (res) => {
        console.log('Login Failed!', res);
    }
    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignIn={true}
            />
        </div>
    )
}

export default LoginButton;