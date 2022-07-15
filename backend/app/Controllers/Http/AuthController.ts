import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthValidator from 'App/Validators/AuthValidator'

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const { email, password } = await request.validate(AuthValidator)

    try {
      const token = await auth.use('api').attempt(email, password)
      const { name, id } = token.user
      return { token: token.token, name, email, id }
    } catch {
      return response.badRequest('Email e/ou senha inválidos')
    }
  }
}
