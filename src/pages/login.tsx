import { Container, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

const SectionTitle = styled(Typography)({
  marginTop: '70px',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '20px',
  fontWeight: 'bold',
});

const InputSection = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '20px',
  width: '450px',
  marginTop: '50px',
  paddingBottom: '300px',
});

const LoginButton = styled(Button)({
  backgroundColor: 'purple',
  color: 'white',
  fontSize: '20px',
  fontWeight: 'bold',
  height: '54px',
});

const SigninButton = styled(Button)({
  border: 'solid 1px purple',
  color: 'purple',
  fontSize: '20px',
  fontWeight: 'bold',
  height: '54px',
});

const LogIn = () => {
  return (
    <Container>
      <SectionTitle>로그인</SectionTitle>
      <InputSection>
        <TextField id="login-id" label="아이디를 입력해주세요." />
        <TextField id="login-password" label="비밀번호를 입력해주세요." />
        <LoginButton>로그인</LoginButton>
        <SigninButton>회원가입</SigninButton>
      </InputSection>
    </Container>
  );
};

export default LogIn;
