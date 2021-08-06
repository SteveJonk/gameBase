import error from '../../Assets/Error.svg';

const ErrorMessage = () => {
  return (
    <div>
      <img
        style={{ margin: '0 auto', display: 'block' }}
        src={error}
        alt='Error animation'
        width='400'
      />
    </div>
  );
};

export default ErrorMessage;
