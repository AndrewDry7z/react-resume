import React from 'react';

function WorkExperienceItem({terms, position, companyName, description}) {
    return (
        <div className="work-experience-item">
            <div className="work-experience-item__job">
                <p className="work-experience-item__job--terms">
                    {terms}
                </p>
                <p className="work-experience-item__job--position">
                    {position}
                </p>
                <p className="work-experience-item__job--company">
                    {companyName}
                </p>
            </div>
            <div className="work-experience-item__line">
                            <span className="work-experience-item__line--container">
                            </span>
            </div>
            <div className="work-experience-item__description">
                {description}
            </div>
        </div>
    )
}

export default WorkExperienceItem;