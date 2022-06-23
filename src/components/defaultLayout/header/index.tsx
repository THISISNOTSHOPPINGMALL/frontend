import * as React from 'react';
import { Button, Container, Divider, Input, Stack } from '@mui/material';
import { styled } from '@mui/system';
import { grey, purple } from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const TopHeaderArea = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  py: 1,
  color: grey[900],
});

const LoginButton = styled(Button)({
  color: purple[800],
  fontSize: '12px',
});

const AuthButton = styled(Button)({
  color: grey[900],
  fontSize: '12px',
});

const MenuButton = styled(Button)({
  color: grey[900],
  fontWeight: 'bold',
  fontSize: '14px',
});

const DeliveryButton = styled(Button)({
  borderRadius: '20px',
  fontSize: '11px',
  color: purple[800],
});

const TopButtonArea = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
  maxHeight: '15px',
});

const MenuButtonArea = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'sticky',
});

const SearchInput = styled(Input)({
  height: '20px',
  borderRadius: '20px',
});

export const Header = () => {
  return (
    <TopHeaderArea>
      <TopButtonArea>
        <DeliveryButton
          color="secondary"
          variant="outlined"
          endIcon={<ChevronRightIcon />}
        >
          샛별택배 배송안내
        </DeliveryButton>
        <Stack
          direction="row"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <LoginButton className="header-button-signup">회원가입</LoginButton>
          <AuthButton className="header-button-login">로그인</AuthButton>
          <AuthButton className="header-button-cs">고객센터</AuthButton>
        </Stack>
      </TopButtonArea>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: 4,
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/5900/5900360.png"
          alt="shopping mall"
          width="50px"
        ></img>
      </Container>
      <MenuButtonArea>
        <MenuButton>전체 카테고리</MenuButton>
        <MenuButton>신상품</MenuButton>
        <MenuButton>베스트</MenuButton>
        <MenuButton>알뜰쇼핑</MenuButton>
        <MenuButton>특가/혜택</MenuButton>
        <SearchInput />
        <PlaceOutlinedIcon />
        <FavoriteBorderIcon />
        <LocalGroceryStoreOutlinedIcon />
      </MenuButtonArea>
    </TopHeaderArea>
  );
};
