const env = 'development';

const serverUrl = env === 'development' ? 
    'https://1tmm0szfph.execute-api.us-west-2.amazonaws.com/seker_sofrim_test/' : 
    'https://7npxc1c5ll.execute-api.us-west-2.amazonaws.com/SekerSofrim/';

export default {
    rest:{
        serverUrl,
        getConnectedUser:'getconnecteduser',
        getMessages:'getmessages',
        idLogin: "idlogin",
        passwordLogin:"passwordlogin",
        resetPassword: "resetpassword",
        requestUpdateUserDetails: "requestupdateuserdetails",
        updateUserDetails: "updateuserdetails",
        manage: {
            updateUsers: "uploadusers",
            updateMessages:'replacemessages',
            getUsers: "getusersreport",
            confirmUserDetails: "confirmuserdetails",
            getUserDetailsConfirms: "getuserdetailsconfirms"
        },
        logout: "logout"
    },
    isMockMode: false,
    year: 2016
};

