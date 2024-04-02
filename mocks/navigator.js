const mockMediaDevices = {
  getUserMedia: jest.fn().mockResolvedValue({ getTracks: jest.fn().mockReturnValue([]) }),
  enumerateDevices: jest
    .fn()
    .mockResolvedValue([
      { kind: 'videoinput', deviceId: 'mockDeviceId', label: 'mockLabel', groupId: 'mockGroupId' },
    ]),
}

Object.defineProperty(navigator, 'mediaDevices', {
  writable: true,
  value: mockMediaDevices,
})
