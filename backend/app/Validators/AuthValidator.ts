import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({}, [rules.email(), rules.exists({ table: 'users', column: 'email' })]),
    password: schema.string({}, [rules.minLength(6)]),
  })

  public messages: CustomMessages = {
    email: 'Por favor, insira um e-mail válido',
    minLength: 'A senha deve possuir o tamanho mínimo de {{options.minLength}}',
    exists: 'O e-mail inserido não está cadastrado',
  }
}
