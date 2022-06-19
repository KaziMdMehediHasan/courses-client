import { GoogleLogout } from 'react-google-login';

const clientId = "111507259213-b25g3f9kc2gg1lqlded9lie7qv1ahfhi.apps.googleusercontent.com";

function LogoutButton() {
    const onSuccess = () => {
        console.log("Log Out Successful!");
    }
    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default LogoutButton;