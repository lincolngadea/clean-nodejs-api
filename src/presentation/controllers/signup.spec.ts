import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-params-error'

const makeSut = (): SignUpController => {
  return new SignUpController()
}

describe('Signup Controller', () => {
  test('Should return 400 no name is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)// testa status 400
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should return 400 no email is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)// testa status 400
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 no password is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@email.com',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)// testa status 400
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('Should return 400 no passwordConfirmation is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@email.com',
        password: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)// testa status 400
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })
})
