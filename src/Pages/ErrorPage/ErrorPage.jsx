import errorImg from '../../assets/404.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img src={errorImg} alt="" className='w-full h-screen'/>
        </div>
    );
};

export default ErrorPage;