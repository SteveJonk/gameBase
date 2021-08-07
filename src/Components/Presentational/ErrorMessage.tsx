import error from '../../Assets/Error.svg';

const ErrorMessage = () => {
  return (
    <div>
      <img
        style={{ margin: '0 auto', display: 'block' }}
        src={error}
        alt='Error animation'
        width='300px'
      />
    </div>
  );
};

export default ErrorMessage;
