import React from 'react';
import './work-experience.scss';
import WorkExperienceItem from "./work-experience-item";

function WorkExperience() {
    return (
        <div className="background-wrap">
            <section className="work-experience max-width">
                <h2>My work experience</h2>
                <div className="work-experience-list">
                    <WorkExperienceItem
                        terms={'November 2019 – Current'}
                        position={'Full Stack Web Developer'}
                        companyName={'Creative Soldiers, Ryazan'}
                        description={'Web developer in new division of Email Soldiers, best e-mail marketing agency in Russia'}
                    />
                    <WorkExperienceItem
                        terms={'November 2017 – September 2019'}
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
            </section>
        </div>
    );
}

export default WorkExperience;
