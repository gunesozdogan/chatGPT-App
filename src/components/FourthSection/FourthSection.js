/* eslint-disable react/no-unescaped-entities */
import classes from './FourthSection.module.scss';

const FourthSection = () => {
  const {
    uppperContainer,
    lowerContainer,
    contact,
    info,
    reload,
    links,
    itemContainer,
    items,
  } = classes;
  return (
    <>
      <div className={uppperContainer}>
        <h2>
          Let's start experiencing the new internet <span>today.</span>
        </h2>
        <button>Get started for free</button>
      </div>
      <div className={lowerContainer}>
        <div className={contact}>
          <p>
            We would love to hear from you. Let’s work — together with Reload
          </p>
          <button>Contact us</button>
        </div>
        <div className={info}>
          <div className={itemContainer}>
            <h4>Business requires</h4>
            <div className={items}>
              <span>hello@colstic.com</span>
              <span>+27 123 456 789</span>
            </div>
          </div>
          <div className={itemContainer}>
            <h4>Open positions</h4>
            <div className={items}>
              <span>Junior Graphic Design</span>
              <span>Videography</span>
              <span>Photography</span>
            </div>
          </div>
          <div className={itemContainer}>
            <h4>London</h4>
            <div className={items}>
              <span>133A Rye lane London SE15 4BQ UK</span>
            </div>
          </div>
          <div className={itemContainer}>
            <h4>Cape town</h4>
            <div className={items}>
              <span>14 Upper pepper street CBD, 8001 Cape Town</span>
            </div>
          </div>
        </div>
        <div className={reload}>
          <p>
            <span>reload</span>.case
          </p>
        </div>
        <div className={links}>
          <span>DRIBBLE</span>
          <span>INSTAGRAM</span>
          <span>LINKEDIN</span>
        </div>
      </div>
    </>
  );
};

export default FourthSection;
