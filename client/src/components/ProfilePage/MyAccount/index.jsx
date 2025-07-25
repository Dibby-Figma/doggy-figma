import React from 'react';
import './styles.css';
import Pencil from '../../../assets/updatePencil.png';

function MyAccount({ setEnterPasswordEmail, setEnterPasswordPassword }) {
  const hardCodedPersonalInfo = {
    firstName: 'John',
    lastName: 'Smith',
    phoneNumber: '(123) 456-7890',
    email: 'JohnSmith123@gmail.com',
    password: '**********',
  };

  return (
    <div>
      <div className='personal-information'>
        <h4>My Account</h4>
        <h6>Personal Information</h6>
        <div className='personal-info-card'>
          <div className='personal-info-type'>
            <span>First Name</span>
            <div className='personal-info-input'>
              {hardCodedPersonalInfo.firstName}
            </div>
          </div>
          <div className='personal-info-type'>
            <span>Last Name</span>
            <div className='personal-info-input'>
              {hardCodedPersonalInfo.lastName}
            </div>
          </div>
          <div className='personal-info-type'>
            <span>Phone Number</span>
            <div className='personal-info-input'>
              {hardCodedPersonalInfo.phoneNumber}
            </div>
          </div>
        </div>
        <h6>Login & Security</h6>
        <div className='login-and-security-card'>
          <div className='log-and-sec-type'>
            <div className='log-and-sec-type-and-input'>
              <span>Email</span>
              <div className='log-and-sec-input'>
                {hardCodedPersonalInfo.email}
              </div>
            </div>
            <button onClick={() => setEnterPasswordEmail(true)}>
              <img src={Pencil} alt='pencil' className='log-and-sec-pencil' />
              <span>Update Email</span>
            </button>
          </div>
          <div className='log-and-sec-type'>
            <div className='log-and-sec-type-and-input'>
              <span>Password</span>
              <div className='log-and-sec-input'>
                {hardCodedPersonalInfo.password}
              </div>
            </div>
            <button onClick={() => setEnterPasswordPassword(true)} >
              <img src={Pencil} alt='pencil' className='log-and-sec-pencil' />
              <span>Update Password</span>
            </button>
          </div>
        </div>
        <button className='save-changes'>Save Changes</button>
      </div>
    </div>
  );
}

export default MyAccount;
