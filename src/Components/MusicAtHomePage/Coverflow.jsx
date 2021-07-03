import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

function handleOnClick() {
  window.location = '/plyty';
}

export default function Coverflows() {

  return (
    <StyleRoot>
      <Coverflow
        width={960}
        height={480}
        displayQuantityOfSide={2}
        navigation={false}
        enableHeading={false}
        infiniteScroll
        media={{
          '@media (max-width: 660px)': {
            width: '400px',
            height: '300px'
          },
          '@media (max-width: 900px)': {
            width: '600px',
            height: '300px'
          },
          '@media (min-width: 900px)': {
            width: '960px',
            height: '600px'
          }
        }}
      >
        <div
          onClick={handleOnClick}
          role="menuitem"
          tabIndex="0"
        >
          <img
            src={process.env.PUBLIC_URL + '/images/niebedzie-square.jpg'}
            alt='Nie będzie powrotu'
            style={{ display: 'block', width: '100%' }}
          />
        </div>
        <div
          onClick={handleOnClick}
          role="menuitem"
          tabIndex="0"
        >
          <img
            src={process.env.PUBLIC_URL + '/images/niebedziemy.jpg'}
            alt='Nie będziemy tacy'
            style={{ display: 'block', width: '100%' }} />
        </div>
        <div
          onClick={handleOnClick}
          role="menuitem"
          tabIndex="0"
        >
          <img
            src={process.env.PUBLIC_URL + '/images/kto-square.jpg'}
            alt='Kto zastrzelił dezertera'
            style={{ display: 'block', width: '100%' }} />
        </div>
        <div
          onClick={handleOnClick}
          role="menuitem"
          tabIndex="0"
        >
          <img
            src={process.env.PUBLIC_URL + '/images/mijajacy-square.jpg'}
            alt='Mijający czas'
            style={{ display: 'block', width: '100%' }} />
        </div>
        <div
          onClick={handleOnClick}
          role="menuitem"
          tabIndex="0"
        >
          <img
            src={process.env.PUBLIC_URL + '/images/prowadz.jpg'}
            alt='Prowadź mnie ulico vol.2'
            style={{ display: 'block', width: '100%' }} />
        </div>
        <div
          onClick={handleOnClick}
          role="menuitem"
          tabIndex="0"
        >
          <img
            src={process.env.PUBLIC_URL + '/images/mumdm2.jpg'}
            alt='Muzyka ulicy vol.2'
            style={{ display: 'block', width: '100%' }} />
        </div>
        <div
          onClick={handleOnClick}
          role="menuitem"
          tabIndex="0"
        >
          <img
            src={process.env.PUBLIC_URL + '/images/mumdm3.jpg'}
            alt='Muzyka ulicy vol.3'
            style={{ display: 'block', width: '100%' }} />
        </div>
      </Coverflow>
    </StyleRoot>
  )
}