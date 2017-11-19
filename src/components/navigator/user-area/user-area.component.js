import React from 'react';
import UserDetailsTable from './user-area-table.component';

const UserArea = ({user, year, userDetailsChanged}) => {
    let priceArea;
    if (user.award > 0) {
        priceArea = <div>
            <h4 id="win-text-price">הננו מתכבדים להודיעך כי ע"פ תוצאות סקר הסופרים המעודכן שבוצע בספריות הציבוריות לשנת {year} מתוכנן לשלם לך סך {Number(user.award).toFixed(2)} ₪, לפני מע"מ.</h4>
            {getWinDetails()}
        </div>;
    } else if (user.award ===0) {
        priceArea = <h4 id="win-text-price">לצערנו סך השאלות ספריך בשנת {year} לא הגיע לרף המינימאלי הדרוש לקבלת זכאות לתשלומים ממשרד התרבות.</h4>;
    } else {
        priceArea = <h4 id="win-text-price">נכון להיום, טרם התקבלו תוצאות.</h4>;
    }
    return (
    <section id="userArea">
        <h2><span>מידע אישי לסופר <b>{user.firstName}</b>.</span></h2>
        {priceArea}
        <hr style={{marginBottom: '10px',marginTop:'10px'}}/>
        <h2 style={{margin:'0px 0px 0px 0px'}}><small style={{color:'black'}}>בכדי לעדכן את שמות ספריך <a href="https://docs.google.com/forms/d/e/1FAIpQLSdkdDEgzh6zvmkUXlPu2ZKhegJGebwWSxtV3ZNtP1wXKbfwyw/viewform?usp=sf_link" target="_blank">לחץ כאן</a>.</small></h2>
        <h4><small>ניתן לעדכן את הפרטים כאן באופן עצמאי, בסיום יש ללחוץ על סימן הV לשמירת השינויים.</small></h4>
        <UserDetailsTable user={user} userDetailsChanged={userDetailsChanged}></UserDetailsTable>
        <h4 id="msg-to-user"></h4>
    </section>
    );
}

const getWinDetails = ()=> {
    return (
        <div>
            <div id="win-text">
                <p>בכדי לממש את זכאותך עליך להמציא לידנו את המסמכים הבאים:</p>
                <table className="details-table">
                    <thead>
                        <tr>
                            <th>באם הינך:</th>
                            <th>עוסק מורשה</th>
                            <th>עוסק פטור</th>
                            <th>שכיר/גמלאי/לא עובד</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>החשבונית/קבלה/תיאום מס/כל אישור אחר צריכים להיות מופנים אל: " מידע שיווקי (סי.איי.) יועצים בע"מ." תיק ניכויים  939377628</strong></td>
                            <td>פרטי חשבון בנק<br/>
                                    אישור ניכוי מס במקור<br/>
                                    אישור ניהול ספרים<br/>
                                    חשבונית
                            </td>
                            <td>פרטי חשבון בנק<br/>
                                    אישור ניכוי מס במקור<br/>
                                    אישור ניהול ספרים<br/>
                                    אישור עוסק פטור<br/>
                                    קבלה
                            </td>
                            <td>פרטי חשבון בנק<br/>
                                    תיאום מס / בקשה לניכוי מס מלא
                                    </td>
                        </tr>
                    </tbody>
                </table>
                <p className="win-documents"><strong>1. </strong><strong>אישור מס הכנסה לקביעת שיעור ניכוי המס הינו עבור תמלוגים לסופרים.</strong></p>
                <p><strong>2. </strong>הכסף יועבר לחשבונך כעבור חודשיים-שלושה מהשלמת כל המסמכים אלינו, ולכן יש לשלוח מסמכים שיהיו בתוקף בעת התשלום בפועל (לסופרים שיעבירו את כל המסמכים עד סוף חודש פברואר 2018, התשלום עבור סופרים שיפנו לאחר תאריך זה עשוי להתעכב בשלושה חודשים נוספים).</p>
                <p><strong>3. </strong>סופרים שהעבירו מסמכים עבור זכאות 2015 ומסמכים אלו עדיין בתוקף נדרשים רק לאשר שלא חל שינוי בפרטי חשבון הבנק, עוסקים מורשים נדרשים להפיק חשבונית חדשה, ועוסקים פטורים - קבלה.</p>
                <p><strong>4. </strong><strong>שימו לב:</strong> סופרים שלא השלימו מסמכי מקור עבור שנת 2015 יעוכב התשלום עבור שנת 2016 עד להשלמת המסמכים הנדרשים!</p>
            </div>
            <div><strong>בכל שאלה מומלץ לשלוח דוא"ל לכתובת  ssofrim@gmail.com.</strong></div>
            <div><strong>להורדת קובץ דרישת תשלומים לדוגמה, <a href="טופס דרישת תשלומים לדוגמה.docx?2">לחץ כאן.</a></strong></div>
        </div>
    );
}
export default UserArea;