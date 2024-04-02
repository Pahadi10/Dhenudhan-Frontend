import '_jestMocks/navigator'
import '_jestMocks/mediaElementMock'

import { t } from 'i18next'
import { faker } from '@faker-js/faker'
import userEvent from '@testing-library/user-event'

import {
  render,
  screen,
  act,
  waitFor,
  fireEvent,
  waitForElementToBeRemoved,
  renderInsideDialog,
} from '_utils/jest-wrapper.util'
import { ROLES } from '_constants/tests.constants'

import ModalUploadPhoto from './modal-upload-photo.component'
import ModalCameraFraming from './modal-camera-framing.component'
import ModalCameraBlocked from './modal-camera-blocked.component'
import ModalCropClientPhoto from './modal-crop-photo.component'
import ModalUploadPhotoSuccess from './modal-upload-photo-success.component'
import { END_COUNTER, INITIAL_COUNTER, INTERVAL_DELAY } from './modal-upload-photo.constants'

const useCameraName = /use camera/i
const uploadPhotoName = /upload photo/i
const startCaptureName = /start capture/i
const cropImageName = /picture/i
const successfullyImageName = /client-photo-updated/i
const cameraStartingName = /camera starting/i
const clientImage = faker.image.avatar()
global.URL.createObjectURL = jest.fn().mockReturnValue(clientImage)

test('should render modal upload photo properly', async () => {
  await act(async () => {
    render(<ModalUploadPhoto />)
  })
  expect(screen.getByText(t('lib:profilePicture.changePhoto'))).toBeInTheDocument()
  expect(screen.getByText(uploadPhotoName, { selector: ROLES.BUTTON })).toBeInTheDocument()
  expect(screen.getByText(useCameraName, { selector: ROLES.BUTTON })).toBeInTheDocument()
})
test('upload photo success', async () => {
  const file = new File(['image'], 'image.png', { type: 'image/png' })
  await act(async () => {
    render(<ModalUploadPhoto />)
  })
  const fileInput = screen.getByLabelText(t('lib:profilePicture.uploadPhoto'), {
    selector: 'input',
  })
  await userEvent.upload(fileInput, file)
  expect(screen.getByText(t('lib:profilePicture.cropAndSave'))).toBeInTheDocument()
})
test('upload photo failure', async () => {
  const file = new File(['otherimage'], 'test.webp', { type: 'image/webp' })
  await act(async () => {
    render(<ModalUploadPhoto />)
  })
  const fileInput = screen.getByLabelText(t('lib:profilePicture.uploadPhoto'))
  await waitFor(() =>
    fireEvent.change(fileInput, {
      target: { files: [file] },
    }),
  )
  expect(screen.getByText(t('errors:forms.invalidFile'))).toBeInTheDocument()
})

test('should render modal upload photo properly without cam', async () => {
  await act(async () => {
    render(<ModalUploadPhoto hasCam={false} />)
  })
  expect(screen.getByText(t('lib:profilePicture.cameraNotFound'))).toBeInTheDocument()
  expect(screen.getByText(uploadPhotoName, { selector: ROLES.BUTTON })).toBeInTheDocument()
})

test('should render modal camera framing properly', async () => {
  await act(async () => {
    render(<ModalCameraFraming />)
  })
  expect(screen.getByLabelText(startCaptureName, { selector: ROLES.BUTTON })).toBeInTheDocument()
})

test('should render modal blocked camera properly', async () => {
  await act(async () => {
    render(<ModalCameraBlocked />)
  })
  expect(screen.getByText(t('lib:profilePicture.cameraIsBlocked'))).toBeInTheDocument()
})

test('should render modal crop client photo properly', async () => {
  const customerImage = faker.image.avatar()
  await act(async () => {
    render(<ModalCropClientPhoto image={customerImage} />)
  })
  const image = screen.getAllByRole(ROLES.IMAGE, { name: cropImageName })
  const [visibleImage] = image
  expect(visibleImage.src).toContain(customerImage)
})

test('should render modal upload client photo successfully', async () => {
  const customerImage = faker.image.avatar()
  await act(async () => {
    render(<ModalUploadPhotoSuccess image={customerImage} />)
  })
  const image = screen.getByRole(ROLES.IMAGE, { name: successfullyImageName })
  expect(image.src).toContain(customerImage)
})

test('should render modal upload photo and change to modal camera framing', async () => {
  await act(async () => {
    render(<ModalUploadPhoto />)
  })
  const useCameraButton = screen.getByRole(ROLES.BUTTON, {
    name: t('lib:profilePicture.useCamera'),
  })
  fireEvent.click(useCameraButton)
  const cameraStarting = screen.getByText(cameraStartingName)
  const startCaptureButton = screen.getByRole(ROLES.BUTTON, {
    name: startCaptureName,
    hidden: true,
  })

  expect(cameraStarting).toBeInTheDocument()
  expect(startCaptureButton).toBeDisabled()
  await waitForElementToBeRemoved(cameraStarting)
  expect(startCaptureButton).toBeEnabled()
})

test('should start capture on modal camera framing and render modal crop photo', async () => {
  await act(async () => {
    renderInsideDialog(<ModalCameraFraming />)
  })

  const cameraStarting = screen.getByRole(ROLES.BUTTON, { name: startCaptureName, hidden: true })
  await waitFor(async () => expect(cameraStarting).toBeEnabled())
  fireEvent.click(cameraStarting)

  await waitForElementToBeRemoved(cameraStarting, {
    timeout: (INITIAL_COUNTER + END_COUNTER) * INTERVAL_DELAY,
  })
  expect(screen.getByText(t('lib:profilePicture.cropAndSave'))).toBeInTheDocument()
})
