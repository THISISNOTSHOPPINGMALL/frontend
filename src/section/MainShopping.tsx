import { FC } from 'react';
import Carousel from 'react-material-ui-carousel';

import { Container, Card, Typography, Paper, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

import { ItemLayout } from '../components/itemLayout';

const SectionTitle = styled(Typography)({
  marginTop: '100px',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '25px',
});

export const MainShopping: FC = () => {
  const mainBannerImages = [
    {
      image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg',
    },
    {
      image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg',
    },
    {
      image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg',
    },
  ];

  const sectionItemImages = [
    {
      image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg',
    },
    {
      image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg',
    },
    {
      image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg',
    },
    {
      image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg',
    },
  ];

  const Item = (props: { mainImage: { image: string } }) => {
    return (
      <Paper>
        <Card>
          <CardMedia
            component="img"
            height="250"
            image={props.mainImage.image}
            alt="Paella dish"
          />
        </Card>
      </Paper>
    );
  };

  return (
    <Container>
      <Card
        sx={{
          my: 2,
        }}
      >
        <Carousel>
          {mainBannerImages.map((item, i) => (
            <Item key={i} mainImage={item} />
          ))}
        </Carousel>
      </Card>
      <SectionTitle>이 상품 어때요?</SectionTitle>
      <Carousel>
        <ItemLayout sectionItemImages={sectionItemImages} />
      </Carousel>
    </Container>
  );
};
