import React from 'react'
import { connect } from 'react-redux'
import TestModal from './TestModal'


const modalLookup ={
    TestModal
}

const mapState = (state) => ({
    currentModal: state.modals
})



const ModalManager = ({currentModal}) => {
let rendereModal;
 if (currentModal){
     const {modalType, modalProps} = currentModal;
     const ModalComponent = modalLookup[modalType];

     rendereModal = <ModalComponent {...modalProps}/>
 }
 

  return <span> {rendereModal}   </span>
}

export default connect(mapState) (ModalManager)
