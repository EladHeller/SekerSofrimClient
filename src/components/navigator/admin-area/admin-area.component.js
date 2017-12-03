import React from 'react';

const adminArea = ({changeDetailsRequests, uploadUsersFile, uploadMessagesFile, downloadUsersExcel}) => {
    const changeDetailTemplate = changeDetailsRequests.map(req=>{
        return (
        <tr type="trTemplate">
            <td type="firstName"><input value={req.firstName}/></td>
            <td type="lastName"><input value={req.lastName}/></td>
            <td type="pseudonym"><input value={(req.pseudonym || '')}/></td>
            <td type="id"><input value={req.ID} disabled /></td>
            <td type="password"><input type="password" disabled value="0000000"/></td>
            <td type="phone"><input value={(req.phone || '')}/></td>
            <td type="tel"><input value={(req.tel || '')}/></td>
            <td type="email"><input value={(req.email || '')}/></td>
            <td type="save" onClick="saveData(event)"><span className="glyphicon glyphicon-saved"></span></td>
        </tr>);
    });
    return (
    <section id="manageArea">
        <h1><span>ברוכים הבאים <b>לממשק הניהול</b>.</span></h1>
        <h4 style={{color:'#3bb156'}}></h4>
        <button onClick={()=>triggerClick('uploadMessagesFile')} className="success" title="לחיצה להעלאת הקובץ">
            <input accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={evt=>uploadMessagesFile(evt.target)} id="uploadMessagesFile" hidden type="file"/>
            <span className="glyphicon glyphicon-open"></span>&nbsp;&nbsp;&nbsp;העלה Excel הודעות
        </button>
        <button id="uploadUsers" onClick={()=>triggerClick('uploadUsersFile')} className="success" title="לחיצה להעלאת הקובץ">
            <input accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={evt=>uploadUsersFile(evt.target)} id="uploadUsersFile" hidden type="file"/>
            <span className="glyphicon glyphicon-open"></span>&nbsp;&nbsp;&nbsp;העלה Excel משתמשים
        </button>
        <button onClick={downloadUsersExcel} id="downloadUsers" to="download" className="success" title="לחיצה להורדת הקובץ">
            <span className="glyphicon glyphicon-save"></span>&nbsp;&nbsp;&nbsp;הורד Excel משתמשים
        </button>
        <br />
        <br />
        <br />
        <table className="table table-condensed" style={{marginBottom: '0px'}}>
            <thead>
                <tr>
                    <th>שם פרטי</th>
                    <th>שם משפחה</th>
                    <th>שם עט</th>
                    <th>ת.ז</th>
                    <th>סיסמא</th>
                    <th>טלפון נייד</th>
                    <th>טלפון נייח</th>
                    <th>כתובת מייל</th>
                    <th>שמירה</th>
                </tr>
            </thead>
        </table>
        <div id="table">
            <table className="table table-condensed" style={{marginBottom: '0px'}}>
                <tbody type="tableContent">{changeDetailTemplate}</tbody>
            </table>
        </div>
    </section>
    );
}

const triggerClick=elementId=>{
    document.getElementById(elementId).click();
}

export default adminArea;