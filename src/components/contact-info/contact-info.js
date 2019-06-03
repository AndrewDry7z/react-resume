import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import './contact-info.scss';

function ContactInfo() {
    return (
        <div className="contacts-info max-width">
            <section className={"contacts-info__contacts"}>
                <div className="contacts-info__contacts-item">
                    <div className="contacts-info__contacts--icon">
                        <FontAwesomeIcon icon={faTelegram} size={'2x'}/>
                    </div>
                    <div className="contacts-info__contacts--text">
                        <p><b>Telegram</b></p>
                        <p><a rel={'nofollow'} target={'_blank'} href="https://tele.gg/andrewdry7z">@andrewdry7z</a></p>
                    </div>
                </div>
                <div className="contacts-info__contacts-item">
                    <div className="contacts-info__contacts--icon">
                        <FontAwesomeIcon icon={faEnvelopeOpenText} size={'2x'}/>
                    </div>
                    <div className="contacts-info__contacts--text">
                        <p><b>E-mail</b></p>
                        <p><a rel={'nofollow'} target={'_blank'}
                              href="mailto:andrewch136@gmail.com">andrewch136@gmail.com</a></p>
                    </div>
                </div>
                <div className="contacts-info__contacts-item">
                    <div className="contacts-info__contacts--icon">
                        <FontAwesomeIcon icon={faLinkedin} size={'2x'}/>
                    </div>
                    <div className="contacts-info__contacts--text">
                        <p><b>LinkedIn</b></p>
                        <p><a rel={'nofollow'} target={'_blank'}
                              href="//www.linkedin.com/in/andrey-chufistov-383293168/">Andrew Chufistov</a></p>
                    </div>
                </div>
                <div className="contacts-info__contacts-item">
                    <div className="contacts-info__contacts--icon">
                        <FontAwesomeIcon icon={faGithub} size={'2x'}/>
                    </div>
                    <div className="contacts-info__contacts--text">
                        <p><b>GitHub</b></p>
                        <p><a rel={'nofollow'} target={'_blank'}
                              href="//github.com/AndrewDry7z">AndrewDry7z</a></p>
                    </div>
                </div>
            </section>
            <section>

            </section>
        </div>
    );
}

export default ContactInfo;
