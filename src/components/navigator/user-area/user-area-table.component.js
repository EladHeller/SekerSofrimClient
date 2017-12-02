import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const UserDetailsTable=({user, userDetailsChanged, modalOpen, toggleModal})=>{
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
                    <Button color="primary" onClick={toggleModal}>שמירה</Button>{' '}
                </ModalFooter>
          </Modal>
            {/* <div className="modal fade" id="confirm-modal" tabIndex="-1" role="dialog" aria-labelledby="confirmModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="confirmModalLabel">רק רגע...</h4>
                        </div>
                        <div className="modal-body">
                            האם לשמור את השינויים?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">ביטול</button>
                            <button type="button" className="btn btn-primary" id="saveUserAreaData" data-dismiss="modal">שמירה</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default UserDetailsTable;