import { Injectable } from '@nestjs/common';
import { PrismaService } from '@API/utils/prisma/prisma.service';
import { Sound } from '@prisma/client';

@Injectable()
export class AudioRepository {
  constructor(private readonly prisma: PrismaService) { }

  getSound(cmd:string){
      return this.prisma.sound.findUnique({
          where: {command: cmd}
      })
  }

  listSound(){
      return this.prisma.sound.findMany({
          select:{
              command: true,
              description: true
          }
      })
  }

  createSound(body:Sound){
      return this.prisma.sound.create({
          data:body
      })
  }

  deleteSound(cmd:string){
      return this.prisma.sound.delete({
          where: {command: cmd}
      })  
  }
}
