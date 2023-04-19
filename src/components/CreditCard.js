import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import creditCard from '../assets/credit-card.jpg';
import './CreditCard.scss';
import IconText from './IconText';
import { faCoffee, faCreditCard, faMobile, faShoppingCart, faWallet } from '@fortawesome/free-solid-svg-icons';

const CreditCard = () => {
  return (
    <Container className='my-5'>
      <Row>
        <Col xs={12} lg={7} className='mb-5 mb-lg-0 px-5 px-lg-0'>
          <Row>
            <h2 className='my-5 credit-card-title'>Cartão de crédito</h2>
          </Row>

          <Row>
            <Col xs={12} lg={6} className='mb-4'>
              <IconText icon={faCreditCard}>Crédito pessoal</IconText>
            </Col>
            <Col xs={12} lg={6} className='mb-4'>
              <IconText icon={faShoppingCart}>Pagamentos Online</IconText>
            </Col>
            <Col xs={12} lg={6} className='mb-4'>
              <IconText icon={faMobile}>APP</IconText>
            </Col>
            <Col xs={12} lg={6} className='mb-4'>
              <IconText icon={faWallet}>Carteira Digital</IconText>
            </Col>
          </Row>
        </Col>

        <Col xs={12} lg={5}>
          <Image src={creditCard} alt='Imagem cartão de credito' fluid />
        </Col>
      </Row>
    </Container>
  )
}

export default CreditCard;