import { Exception } from '@adonisjs/core/build/standalone'

/*
|--------------------------------------------------------------------------
| Exception
|--------------------------------------------------------------------------
|
| The Exception class imported from `@adonisjs/core` allows defining
| a status code and error code for every exception.
|
| @example
| new TestException('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
export default class ExceptionHandler extends Exception {
  public errorCode: string
  public statusCode: number
  public message: string

  constructor(message: string, statusCode: number, errorCode: string) {
    super(message, statusCode, errorCode)
    this.message = message
    this.statusCode = statusCode
    this.errorCode = errorCode
  }

  public async handle(_error, { response }) {
    return response.status(this.statusCode).json({
      error: {
        message: this.message,
        code: this.errorCode,
      },
    })
  }
}
