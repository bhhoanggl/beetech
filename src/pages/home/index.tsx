import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '../../components/common/Typography';
import Container from '../../components/common/Container';
import MainBanner from '../../components/banner';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <MainBanner />
      <Container>
        <Typography className="font-bold">{t('welcome')}</Typography>
      </Container>
    </>
  );
};

export default Home;
