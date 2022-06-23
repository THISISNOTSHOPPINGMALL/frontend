import * as React from 'react';
import { Grid, Card, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

const ItemListGrid = styled(Grid)({
  marginTop: '30px',
});

export const ItemLayout = (props: { sectionItemImages }) => {
  const { sectionItemImages } = props;
  return (
    <div>
      <ItemListGrid container spacing={4}>
        {sectionItemImages.map((item: { image: string }) => (
          <Grid item xs={3}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={item.image}
                alt="Paella dish"
              />
            </Card>
          </Grid>
        ))}
      </ItemListGrid>
    </div>
  );
};
