import React from 'react';
import { useState, useEffect } from 'react';
import './styles.css';
import TourThisProperty from '../TourThisProperty';
import NeighborhoodTestImage from '../../../assets/Neighborhood_Test_Image.png';

function ListingContainer() {
  const gradients = [0, 1, 2, 3, 4];

  function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth <= 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
  }

  const isMobile = useIsMobile();

  const [houseDetails, setHouseDetails] = useState({
    price: '2800',
    location: '627 Belmont Ave #6, Los Angeles, CA 90026',
    buildingName: 'Belmont Apartments',
    beds: 2,
    baths: 1,
    sqft: 875,
  });

  const [features, setFeatures] = useState([
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Consectetur adipiscing',
    'Consectetur adipiscing',
    'Consectetur adipiscing',
    'Lorem ipsum dolor',
    'Lorem ipsum dolor',
    'Lorem ipsum dolor',
  ]);

  return (
    <div id='property-details-listing-container'>
      <div id='property-details-price-special-features'>
        <section id='property-details-price-bed-bath'>
          <div id='property-details-price-location'>
            <h4>${houseDetails.price}/mo</h4>
            <p id='property-details-location'>{houseDetails.location}</p>
            <p id='property-details-location-two'>
              {houseDetails.buildingName}
            </p>
          </div>
          <div id='property-details-bed-bath-sqft'>
            <div className='property-listing-contents'>
              <h4 className='property-details-bed-bath-sqft-h4-text'>
                {houseDetails.beds}
              </h4>
              <p>beds</p>
            </div>
            <div className='property-listing-contents'>
              <h4 className='property-details-bed-bath-sqft-h4-text'>
                {houseDetails.baths}
              </h4>
              <p>baths</p>
            </div>
            <div className='property-listing-contents'>
              <h4 className='property-details-bed-bath-sqft-h4-text'>
                {houseDetails.sqft}
              </h4>
              <p>sqft</p>
            </div>
          </div>
        </section>
        <section id='property-details-whats-special'>
          <h4 className='property-details-bed-bath-sqft-h4-text'>
            What's Special
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <div className='property-details-grey-line'></div>
        <section id='property-details-apartment-features'>
          <h4 className='property-details-bed-bath-sqft-h4-text'>
            Apartment Features
          </h4>
          <h6 id='property-details-apartment-features-h6-text'>
            Features & Appliances
          </h6>
          <div className='property-details-list-container'>
            {features.map((item, index) => (
              <span className='property-details-list-item' key={index}>
                {item}
              </span>
            ))}
          </div>
        </section>
        <div className='property-details-grey-line'></div>
        <h4 className='property-details-bed-bath-sqft-h4-text'>Neighborhood</h4>
        <img
          src={NeighborhoodTestImage}
          alt='neighborhood-test-image'
          id='property-details-list-map'
        ></img>
      </div>
      <div id='property-details-tour-dibby-container'>
        <TourThisProperty isMobile={isMobile} />
      </div>
      {gradients.map((_, index) => (
        <div className={`property-details-gradient-${index}`} key={index}></div>
      ))}
    </div>
  );
}

export default ListingContainer;
