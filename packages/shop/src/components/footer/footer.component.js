import { useTranslation } from 'react-i18next'
import { Box, Typography } from '@mui/material'

import HapanaLogo from '@lib/assets/images/hapana-logo-green-full.png'

import { styles } from './footer.component.styles'

export const Footer = () => {
  const { t } = useTranslation(['shop'])
  return (
    <Box sx={styles.footerContainer}>
      <Typography typography="medium" color="gray.80">
        {t('dashboard.footer.title')}
        <img alt={t('login.logoAltText')} src={HapanaLogo} style={styles.logo} />
      </Typography>
    </Box>
  )
}

export default Footer
