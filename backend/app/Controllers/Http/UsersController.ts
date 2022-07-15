import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ExceptionHandler from 'App/Exceptions/ExceptionHandler'
import User from 'App/Models/User'
import UserValidator from 'App/Validators/UserValidator'

export default class UsersController {
  public async create({ request }: HttpContextContract) {
    const { email, name, password } = await request.validate(UserValidator)

    const userCreated = User.create({
      name,
      email,
      password,
      role: 'teacher',
    })

    return userCreated
  }

  public async readAll() {
    const users = await User.query().where('role', 'teacher')
    return users
  }

  public async readOne({ params }: HttpContextContract) {
    const { id } = params
    const user = await User.query().where('id', id).where('role', 'teacher').first()
    if (!user) {
      throw new ExceptionHandler('Usuário não existe', 404, 'E_USER_NOT_FOUND')
    }
    return user
  }

  public async update({ params, request }: HttpContextContract) {
    const { id } = params

    const { email, name, password } = await request.validate(UserValidator)

    const user = await User.query().where('id', id).where('role', 'teacher').first()
    if (!user) {
      throw new ExceptionHandler('Usuário não existe', 404, 'E_USER_NOT_FOUND')
    }

    user.email = email
    user.name = name
    user.password = password

    await user.save()

    return user
  }

  public async delete({ params }: HttpContextContract) {
    const { id } = params
    const user = await User.query().where('id', id).where('role', 'teacher').first()
    if (!user) {
      throw new ExceptionHandler('Usuário não existe', 404, 'E_USER_NOT_FOUND')
    }

    await user.delete()

    return user
  }
}
