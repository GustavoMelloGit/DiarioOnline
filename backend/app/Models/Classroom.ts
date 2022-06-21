import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Student from './Student'

export default class Classroom extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public lesson: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => User)
  public users: ManyToMany<typeof User>

  @manyToMany(() => Student)
  public students: ManyToMany<typeof Student>

  @manyToMany(() => Student, {
    pivotTable: 'attendances',
    pivotColumns: ['attendance_date'],
  })
  public attendances: ManyToMany<typeof Student>
}
