import { Circles } from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        gap: 20,
      }}
    >
      <Circles
        height="80"
        width="80"
        color="#20B2AA"
        ariaLabel="circles-loading"
        wrapperStyle={{
          display: 'block',
          margin: '0 auto 20px',
        }}
        wrapperClass=""
        visible={true}
      />
      <span>Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
