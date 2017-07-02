export default {
    rest:{
        serverUrl: 'https://7npxc1c5ll.execute-api.us-west-2.amazonaws.com/SekerSofrim/',
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
    isMockMode: true
};
