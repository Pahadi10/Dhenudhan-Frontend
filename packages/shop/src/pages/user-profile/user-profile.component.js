import { Box, CircularProgress, SvgIcon, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import CameraIcon from '@lib/assets/svgs/camera-upload-pic.svg'
import PencilIcon from '@lib/assets/svgs/pen-small.svg'
import SignoutIcon from '@lib/assets/svgs/signout.svg'
import Avatar from '@lib/components/shared/avatar/avatar.component'
import {
  AVATAR_SIZE,
  AVATAR_TYPES,
  AVATAR_VARIANT,
} from '@lib/components/shared/avatar/avatar.constants'
import Button from '@lib/components/shared/button/button.component'
import { BUTTON_VARIANTS } from '@lib/components/shared/button/button.constants'
import { useDialog } from '@lib/components/shared/dialog/dialog.hooks'
import ModalUploadPhoto from '@lib/components/shared/modal-upload-photo/modal-upload-photo.component'
import ChangePassword from '_components/modals/change-password/change-password.component'
import { LOGIN_MOCK_RESPONSE } from '_mocks/dashnoard.mock'

import { styles } from './user-profile.styles'

const PASSWORD_LENGTH = 14

const UserProfile = () => {
  const { pushDialog } = useDialog()
  const { t } = useTranslation('shop')
  const navigate = useNavigate()

  const user = LOGIN_MOCK_RESPONSE.data

  const handleSignOut = () => {
    navigate('/logout')
  }

  // if (isLoading)
  //   return (
  //     <Box mt={2} ml={2}>
  //       <CircularProgress size={32} />
  //     </Box>
  //   )

  return (
    <Box sx={styles.root}>
      <Box sx={styles.headerWrapper}>
        <Typography typography="header4" color="gray.80">
          {t('userProfile.header')}
        </Typography>
      </Box>

      <Box sx={styles.editAndLogoutContainer}>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.contentHeaderWrapper}>
            <Avatar
              variant={AVATAR_VARIANT.CIRCULAR}
              avatarType={AVATAR_TYPES.SINGLE_AVATAR}
              alt={t('userProfile.profileAltText')}
              size={AVATAR_SIZE.EXTRA_LARGE}
              item={{ src: user?.profileImage }}
            />
            <Box sx={styles.contentHeaderDescription}>
              <Box sx={styles.editNameWrapper}>
                <Typography typography="header2" color="gray.100">
                  {`${user?.firstName} ${user?.lastName}`}
                </Typography>
              </Box>
              <Button
                sx={styles.uploadPic}
                label={t('userProfile.changePhotoLabel')}
                variant={BUTTON_VARIANTS.TEXT}
                startIcon={CameraIcon}
                onClick={() => pushDialog(ModalUploadPhoto, {})}
              />
            </Box>
          </Box>
          <Box sx={styles.editsectionWrapper}>
            <Box sx={styles.editSection}>
              <Box sx={styles.editSectionDescription}>
                <Typography typography="header4" color="gray.80">
                  {t('login.email')}
                </Typography>
                <Typography ml={5} typography="header4" color="gray.56">
                  {user?.email}
                </Typography>
              </Box>
            </Box>
            <Box sx={styles.editSection}>
              <Box sx={styles.editSectionDescription}>
                <Typography typography="header4" color="gray.80">
                  {t('login.password')}
                </Typography>
                <Typography sx={styles.email} typography="header4" color="gray.56">
                  {new Array(PASSWORD_LENGTH).fill('*')}
                </Typography>
              </Box>
              <Box item xs={1}>
                <SvgIcon
                  sx={styles.editNameIcon}
                  component={PencilIcon}
                  onClick={() => pushDialog(ChangePassword)}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box ml={3} mb={5}>
          <Button
            label={t('userProfile.logout')}
            variant={BUTTON_VARIANTS.TEXT}
            startIcon={SignoutIcon}
            onClick={handleSignOut}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default UserProfile
