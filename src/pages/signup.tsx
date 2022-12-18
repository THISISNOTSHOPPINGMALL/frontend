import { Container, Typography, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

const SectionTitle = styled(Typography)({
  marginTop: '70px',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '20px',
  fontWeight: 'bold',
});

const SignUp = () => {
  return (
    <Container>
      <SectionTitle>회원가입</SectionTitle>
    </Container>
  );
};

export default SignUp;
