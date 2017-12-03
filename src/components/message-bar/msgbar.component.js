import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MessagesBar = ({messages, toggleModal, modalOpen})=> {
    const msgText = getMsgBarText(messages);
    const messagesStyle = getMessageStyle(msgText);
    
    return <div id="messages-container">
        <div id="messages" style={messagesStyle} onClick={toggleModal}>{msgText}</div>
        <Modal isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>הודעות</ModalHeader>
                <ModalBody>
                    {messages.map((msg, index)=>{
                        return <div key={index +1}><b>{index +1}</b> | {msg}<br/></div>;
                    })}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleModal}>סגור</Button>
                </ModalFooter>
          </Modal>
    </div>
}
const getMsgBarText = (messages)=>{
    let msgText = '';
    if (messages && messages.length){
        const splitMessages = messages.map((msg)=>splitMessage(msg,100))
            .filter(msg=>msg);
        for (let x = 0; msgText.length < 5000; x++) {
            const msg = splitMessages[x % splitMessages.length];        
            msgText += msg + "    |    ";
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
const splitMessage = (msg, limit) =>{
    const words = msg.split(' ');
    let str = '';

    for (let word of words) {
        if ((str.length  + word.length ) > limit) {
            str += '...';
            break;
        } else {
            str += word + ' ';
        }
    }

    return str.trim();
}

export default MessagesBar;