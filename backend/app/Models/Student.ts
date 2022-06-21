import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Lesson from './Lesson'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Lesson)
  public lessons: ManyToMany<typeof Lesson>

  @manyToMany(() => Lesson, {
    pivotTable: 'attendances',
    pivotColumns: ['attendance_date'],
  })
  public attendances: ManyToMany<typeof Lesson>
}
