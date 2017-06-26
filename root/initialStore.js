const initialStore = {
    user : {
        isLoggedIn : false
    },
    messages : [
        'בדיקה בדיקה בדיקה',
        'הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה',
        'בדיקה אחרת סתם',
    ], 
    ui :{
        windowHeight: window.outerHeight,
        windowWidth: window.outerWidth
    },
    station:{
        stationName: 'Welcome'
    }
};
export default initialStore;