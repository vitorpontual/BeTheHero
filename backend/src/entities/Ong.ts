import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import crypto from 'crypto'


@Entity("ongs")
export class Ong{
  
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  whatsapp: string

  @Column()
  city: string;

  @Column({length: 20})
  uf: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(){
    if(!this.id){
      const id = crypto.randomBytes(4).toString("HEX")
      this.id = id
    }
  }
}