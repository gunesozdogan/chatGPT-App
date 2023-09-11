/* eslint-disable react/no-unescaped-entities */
import classes from './ThirdSection.module.css';

const ThirdSection = () => {
  const { left, right, imageContainer } = classes;
  return (
    <>
      <div className={left}>
        <h2>Chat with unique characters</h2>
        <p>
          You can chat many different characters for a few set of topics and
          interests.
        </p>
        <button>Let's start chat</button>
        <div></div>
      </div>
      <div className={right}>
        <div className={imageContainer}>
          <div>
            <img src="/images/hitachi.png" alt="image 1" />
            <p>Hitachi Digital Brand Ecosystem.</p>
          </div>
          <div>
            <img src="/images/strabe.png" alt="image 2" />
            <p>Stråbe</p>
          </div>
          <div>
            <img src="/images/commons.png" alt="image 3" />
            <p>Commons.</p>
          </div>
          <div>
            <img src="/images/aeizei.png" alt="image 4" />
            <p>Aeizei</p>
          </div>
          <div>
            <img src="/images/fashion.png" alt="image 5" />
            <p>Zvurçyk Fashion</p>
          </div>
          <div>
            <img src="/images/lancome.png" alt="image 6" />
            <p>Lancome</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
