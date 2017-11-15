import PropTypes from 'prop-types';
import styled from 'styled-components';
import backgroundImage from '../images/background.jpg';

const Container = styled.div`
  text-align: center;
  background-color: ${props => props.theme.brandPrimary || '#2CA4AB'};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 1rem 0rem;
  color: #fff;
`;

const Jumbotron = ({ children, className, style, ...props }) => (
  <Container
    className={className}
    style={{ backgroundImage: `url(${backgroundImage})`, ...style }}
    {...props}
  >
    {children}
  </Container>
);

Jumbotron.defaultProps = {
  className: '',
  style: {}
};

Jumbotron.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object // eslint-disable-line
};

export default Jumbotron;
