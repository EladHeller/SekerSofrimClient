import React from 'react';
const MessagesBar = ({messages})=> {
    const msgText = getMsgBarText(messages);
    const messagesStyle = getMessageStyle(msgText);
    
    return <div>
        <div id="messages" style={messagesStyle} data-toggle="modal" data-target="#messagesModal">{msgText}</div>
        <div className="modal fade" id="messagesModal" tabIndex="-1" role="dialog" aria-labelledby="messagesModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content" style={{'borderRadius': 0}}>
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title" id="messagesModalLabel" style={{'fontWeight': 700}}>הודעות</h4>
                    </div>
                    <div className="modal-body">
                        {messages.map((msg, index)=>{
                            return <div key={index +1}><b>{index +1}</b> | {msg}<br/></div>;
                        })}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary"  style={{'borderRadius': 0}} data-dismiss="modal">סגור</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
const getMsgBarText = (messages)=>{
    let msgText = '';
    for (let x = 0; x < 40; x++) {
        for (let msg of messages) {
            let currMsg = checkLength(msg);
            if (currMsg.trim()){
                msgText += checkLength(msg) + "    |    ";
            }
        }
    }
    return msgText;
}
const getMessageStyle= (msgText)=>{
    const messagesStyle ={};
    if (!msgText){
        messagesStyle.display = 'none';
    }
    return messagesStyle;
}
const checkLength = (msg) =>{
    msg = msg.split(' ');
    var limit = 100;
    var str = '';

    for (var i = 0, len = msg.length; i < len; i++) {
        str += msg[i] + ' ';

        if (str.length > limit) {
            str = str.replace(new RegExp(' ' + msg[i] + ' $'), '...');
            break;
        }
    }

    return str;
}

export default MessagesBar;