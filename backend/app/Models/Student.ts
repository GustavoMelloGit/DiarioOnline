import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Classroom from './Classroom'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Classroom)
  public classrooms: ManyToMany<typeof Classroom>

  @manyToMany(() => Classroom, {
    pivotTable: 'attendances',
    pivotColumns: ['attendance_date'],
  })
  public attendances: ManyToMany<typeof Classroom>
}
