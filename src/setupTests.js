import "@testing-library/jest-dom"

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
Object.defineProperty(window, "localStorage", { value: localStorageMock })

Object.defineProperty(window, "matchMedia", { value: jest.fn() })

Object.defineProperty(window, "scrollTo", { value: jest.fn() })
Object.defineProperty(window, "scroll", { value: jest.fn() })

Object.defineProperty(global, "fetch", { value: jest.fn() })
