import Owen from "../images/owen.webp";


const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>Owen Wilson's   </h1>
      <a
        href='https://www.youtube.com/watch?v=vxiVYEjp0Ww'
        target='_blank'
        rel='noreferrer'
      >
        <img className='header__pic' src={Owen} alt='Owen Wilson' />
      </a>
    </header>
  );
};


export default Header;