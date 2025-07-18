import React, { useState } from 'react';
import './styles.css';
import { createPortal } from 'react-dom';
import { useIsMobile } from '../../../util/useIsMobile';

function PriceDropDown({ onClose }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [minMax, setMinMax] = useState('min');
  const isMobile = useIsMobile();

  const minOptions = ['No Min', '$500', '$700', '$900'];
  const maxOptions = [
    '$1,100',
    '$1,300',
    '$1,500',
    '$1,700',
    '$1,900',
    'No Max',
  ];

  const optionsToShow = minMax === 'min' ? minOptions : maxOptions;

  const dropdown = (
    <div className='price-dropdown-container'>
      <div className='price-dropdown-range-inputs'>
        <input
          type='text'
          placeholder='Min'
          className={`price-dropdown-input ${minMax === 'min' ? 'selected' : ''}`}
          onFocus={() => setMinMax('min')}
        />
        <span id='price-dropdown-spacer'>–</span>
        <input
          type='text'
          placeholder='Max'
          className={`price-dropdown-input ${minMax === 'max' ? 'selected' : ''}`}
          onFocus={() => setMinMax('max')}
        />
      </div>
      <div className='price-dropdown-options-container'>
        <div className={`price-dropdown-options-container ${minMax === 'max' ? 'align-right' : 'align-left'}`}>
          {optionsToShow.map((option, idx) => (
            <div
              key={idx}
              className={`price-dropdown-option ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
      <div className='price-dropdown-apply-button-container'>
        <button className='price-dropdown-apply-button' onClick={onClose}>
          Apply
        </button>
      </div>
    </div>
  );

  const portalRoot = document.getElementById('portal-root');

  if (isMobile && portalRoot) {
    return createPortal(dropdown, portalRoot);
  }

  return dropdown;
}
export default PriceDropDown;
