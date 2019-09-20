import React from 'react';
import './work-experience.scss';
import WorkExperienceItem from "./work-experience-item";
import MessageModalInit from "../common/modal-message";

function WorkExperience() {
    return (
        <div className="background-lighter">
            <section className="work-experience max-width">
                <h2>My work experience</h2>
                <div className="work-experience-list">
                    <WorkExperienceItem
                        terms={'November 2017 – Current'}
                        position={'Web Developer'}
                        companyName={'Sales Generator, Ryazan'}
                        description={'Frontend Developer (+ some backend) in SEO agency. Building search- and user-friendly responsive websites, landing pages, site modules, functional extension. Wordpress, Bitrix, MODX, Joomla.'}
                    />
                    <WorkExperienceItem
                        terms={'May 2016 – November 2017'}
                        position={'Internet Marketer / SEO Project Manager'}
                        companyName={'Sales Generator, Ryazan'}
                        description={'Marketing strategy development, tasks distribution, customers support, web analytics, organic traffic increasing, employee training'}
                    />
                    <WorkExperienceItem
                        terms={'April 2015 – March 2016'}
                        position={'Designer'}
                        companyName={'The Dash, Ryazan'}
                        description={'Layout design, prepress, post printing, customers support'}
                    />
                    <WorkExperienceItem
                        terms={'November 2012 – March 2014'}
                        position={'Sysadmin'}
                        companyName={'Medical Clinic, Ryazan'}
                        description={'Help Desk, Service Desk, LAN maintenance'}
                    />

                </div>
                <div className="work-experience-notice">
                    <p className="work-experience-notice__text">
                        Currently looking for job! If you have one:
                    </p>
                    <MessageModalInit isOpen={false}/>
                </div>
            </section>
        </div>
    );
}

export default WorkExperience;
