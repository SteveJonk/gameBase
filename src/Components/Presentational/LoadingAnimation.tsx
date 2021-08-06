import loader from '../../Assets/PacManLoader.svg';

const LoadingAnimation = () => {
  return (
    <div>
      <img
        style={{ margin: '0 auto', display: 'block' }}
        src={loader}
        alt='loader animation'
      />
    </div>
  );
};

export default LoadingAnimation;
