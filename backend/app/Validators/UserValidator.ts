import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({}, [rules.alpha()]),
    email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
    password: schema.string({}, [rules.confirmed(), rules.minLength(6)]),
  })

  public messages: CustomMessages = {
    alpha: 'O campo nome possui caracteres inválidos',
    email: 'Por favor, insira um e-mail válido',
    confirmed: 'Confirmação de senha não confere',
    minLength: 'A senha deve possuir o tamanho mínimo de {{options.minLength}}',
    unique: 'Este e-mail já está sendo utilizado',
  }
}
