import React from 'react';
import Modal from 'react-modal';

class ModalWindow extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            name: "",
            email: "",
            message: ""
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event) {
        event.preventDefault();

        let payload = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        function sendData(url, data) {
            let formData = new FormData();

            for (let name in data) {
                formData.append(name, data[name]);
            }

            fetch(url, {
                method: 'POST',
                body: formData
            }).then(function () {
               document.querySelector('.modal-body form').innerHTML = `<p>Thank you, ${payload.name}!</p><p>Your message has been successfully sent!</p>`;
            });
        }

        sendData('/send_mail.php', payload)
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
                    <p className={'modal-close'} onClick={this.handleCloseModal}></p>
                    <div className="modal-body">
                        <h2>Contact me</h2>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="name" placeholder={'Your name'} required={'required'}
                                   value={this.state.name}
                                   onChange={(event) => this.setState({name: event.target.value})}/>
                            <input type="email" name="email" placeholder={'Your e-mail'} required={'required'}
                                   value={this.state.email}
                                   onChange={(event) => this.setState({email: event.target.value})}/>
                            <textarea name="message" cols="30" rows="10" placeholder={'Message text...'}
                                      required={'required'} value={this.state.message}
                                      onChange={(event) => this.setState({message: event.target.value})}></textarea>
                            <button className={"send-message-button scale-on-hover"} type="submit">Submit message
                            </button>
                        </form>
                    </div>
                </Modal>
            </div>

        );
    }
}

export default ModalWindow;
