import { Column, CreateDateColumn, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

import { Ong } from "./Ong";


export class Incident {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  value: number;

  @ManyToOne(() => Ong)
  @JoinColumn({name: "ong_id"})
  ong: Ong

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date

  constructor(){
    if(this.id){
      this.id = uuid
    }
  }

}