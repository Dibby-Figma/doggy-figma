import React from 'react';
import './styles.css';
import dogIcon from '../../../assets/dibby_Dog_Logo.png';
import dogIconTwo from '../../../assets/dogiconthree.png';
import dogIconThree from '../../../assets/dogicontwo.png';

function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Pick a property',
      description:
        'Choose your next home from our selection of listings or from another site.',
      linkText: 'View Property Listings →',
      href: 'property-listings',
      picture: dogIcon,
    },
    {
      number: 2,
      title: 'Get it Checked Out',
      description:
        'Send one of our gig Viewers to inspect and tour the property for you.',
      linkText: '',
      picture: dogIconTwo,
    },
    {
      number: 3,
      title: 'Receive a Report',
      description: 'Receive a comprehensive report on your future home.',
      linkText: 'See Example Report →',
      href: 'See_Example_Report',
      picture: dogIconThree,
    },
  ];

  return (
    <div className='how-it-works-wrapper'>
      <section className='how-it-works-section'>
        <h2 className='how-it-works-title'>How it Works</h2>
        <div className='how-it-works-steps-container'>
          {steps.map((step, index) => (
            <div className='how-it-works-step' key={index}>
              <div className='how-it-works-step-number'>{step.number}</div>
              <h3 className='how-it-works-step-title'>{step.title}</h3>
              <p className='how-it-works-step-description'>{step.description}</p>
              {step.linkText && (
                <a className='how-it-works-step-link' href={step.href}>
                  {step.linkText}
                </a>
              )}
              <img
                src={step.picture}
                alt='dog'
                className={`how-it-works-step-dog-` + `${index}`}
              />
            </div>
          ))}
        </div>
      </section>
      <div className='how-it-works-gradient-two'></div>
    </div>
  );
}

export default HowItWorks;
