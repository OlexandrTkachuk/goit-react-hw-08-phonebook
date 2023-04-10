// system
import { Link } from 'react-router-dom';

// styled, images
import phonebook from '../assets/phonebook.svg.png';
import styled from '@emotion/styled';

export const HomeTitle = styled.h2`
  text-align: center;
  font-size: 54px;
  color: #d8674a;
`;
const HomeImage = styled.img`
  margin: 0 auto;
`;

const Home = () => {
  return (
    <div className="HomeWrapper">
      <HomeTitle>Home Page</HomeTitle>
      <Link to="/contacts">
        <HomeImage src={phonebook} alt="phonebook" />
      </Link>
    </div>
  );
};

export default Home;
