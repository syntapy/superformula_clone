export const desktop = {
  orientationList: ['landscape'],
  devices: [
    "macbook-11",
    "macbook-16"
  ]
}

export const tablet = {
  orientationList: ['portrait', 'landscape'],
  devices: [
    "ipad-2",
  ]
}

export const mobile = {
  orientationList: ["portrait", "landscape"],
  devices: [
    "iphone-6",
    "iphone-xr"
  ]
}

export const audit_devices = {
  devices: [
    "iphone-6",
    "macbook-16"
  ]
}

export const clickWaitTime = 100
export const waitTime = 2400
export const animationWaitTime = 750

export function isDesktopMenuOnMobile(device, orientation) {
  return orientation === 'landscape' && ['iphone-xr'].includes(device)
}

export const errorThreshold = 0.01
