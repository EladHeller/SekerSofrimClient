import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const UserDetailsTable=({user, userDetailsChanged, modalOpen, toggleModal, saveUserDetails})=>{
    const userPropChanged= (evt)=>{
        user[evt.target.id] = evt.target.value;
        userDetailsChanged(user);
    }
    console.log(modalOpen)
    return (
        <div>
            <table className="table table-condensed details-table" style={{marginBottom: '0px'}}>
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
                <tbody>
                    <tr>
                        <td><input onChange={userPropChanged} id="firstName" value={user.firstName}/></td>
                        <td><input onChange={userPropChanged} id="lastName" value={user.lastName}/></td>
                        <td><input onChange={userPropChanged} id="pseudonym" value={user.pseudonym}/></td>
                        <td><input onChange={userPropChanged} id="id" disabled value={user.ID}/></td>
                        <td><input readOnly id="password" value={user.password}/></td>
                        <td><input onChange={userPropChanged} id="phone" value={user.phone}/></td>
                        <td><input onChange={userPropChanged} id="tel" value={user.tel}/></td>
                        <td><input onChange={userPropChanged} id="email" value={user.email}/></td>
                        <td onClick={toggleModal}><span className="glyphicon glyphicon-saved"></span></td>
                    </tr>
                </tbody>
            </table>
            <Modal isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>רק רגע...</ModalHeader>
                <ModalBody>
                האם לשמור את השינויים?
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggleModal}>ביטול</Button>
                    <Button color="primary" onClick={()=>saveUserDetails(user)}>שמירה</Button>
                </ModalFooter>
          </Modal>
        </div>  
    );
};

export default UserDetailsTable;