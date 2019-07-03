import React from 'react';
import Modal from 'react-modal';

class ModalWindow extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false

        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }

    componentDidMount() {
        Modal.setAppElement('body');
    }

    submitForm(event)  {
        event.preventDefault();
        alert('Coming soon!')
    };

    render() {
        return (
            <div>
                <button type={'button'} className={'send-message-button scale-on-hover'} onClick={this.handleOpenModal}>
                    Contact me
                </button>

                <Modal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    className="modal"
                    overlayClassName="modal-overlay"
                >
                    <p className={'modal-close'} onClick={this.handleCloseModal}> </p>
                    <div className="modal-body">
                        <h2>Contact me</h2>
                        <form onSubmit={this.submitForm}>
                            <input type="text" name="name" placeholder={'Your name'} required={'required'}/>
                            <input type="email" name="email" placeholder={'Your e-mail'} required={'required'}/>
                            <textarea name="message" cols="30" rows="10" placeholder={'Message text...'} required={'required'}></textarea>
                            <button className={"send-message-button scale-on-hover"} type="submit">Submit message</button>
                        </form>
                    </div>
                </Modal>
            </div>

        );
    }
}

export default ModalWindow;
