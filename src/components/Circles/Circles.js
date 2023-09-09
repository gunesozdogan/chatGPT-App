import classes from '../Circles/Circles.module.css';

const Circles = () => {
  const { container, first, second, third, fourth } = classes;

  return (
    <div className={container}>
      <div className={first}></div>
      <div className={second}></div>
      <div className={third}></div>
      <div className={fourth}></div>
    </div>
  );
};

export default Circles;
