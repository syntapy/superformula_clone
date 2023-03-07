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

export const waitTime = 300

export function isDesktopMenu(device, orientation) {
  return orientation !== 'landscape' || ['iphone-6+', 'iphone-x', 'iphone-xr', 'samsung-note9', 'samsung-s10'].includes(device)
}

export const errorThreshold = 0.01
