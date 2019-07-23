import React from 'react';
import './educations.scss';

function Educations() {
    return(
        <div className="background-lighter">
            <section className="educations max-width">
                <h2>Educations</h2>
                <div className="educations-list">
                    <div className="educations-item">
                        <p className="educations-item__terms">2009 – 2013</p>
                        <p className="educations-item__name">Ryazan College of Electronics</p>
                        <p className="educations-item__specialty">Networks maintenance</p>
                    </div>
                    <div className="educations-item">
                        <p className="educations-item__terms">2015 – 2020</p>
                        <p className="educations-item__name">Ryazan State Radio Engineering University </p>
                        <p className="educations-item__specialty">Business informatics</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Educations;