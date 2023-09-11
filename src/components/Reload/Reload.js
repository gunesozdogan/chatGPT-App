import classes from '../Reload/Reload.module.scss';

const Reload = () => {
  const { text } = classes;

  return (
    <p className={text}>
      <span>reload</span>.case
    </p>
  );
};

export default Reload;
