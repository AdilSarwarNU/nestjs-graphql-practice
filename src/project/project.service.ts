import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {

  constructor(@InjectRepository(Project) private projectRepository: Repository<Project>) {

  }

  create(project: CreateProjectInput): Promise<Project>{
    let proj = this.projectRepository.create(project);
    return this.projectRepository.save(proj);
  }

  async findAll() : Promise<Project[]>{
    return this.projectRepository.find({
      relations: ["employees"]
    });
  } 

  async findOne(id: string) : Promise<Project> {
    return this.projectRepository.findOne({where: {id: id}, relations: ["employees"]})
  }

  update(id: string, updateProjectInput: UpdateProjectInput) {
    let project: Project = this.projectRepository.create(updateProjectInput);
    project.id = id
    return this.projectRepository.save(project);
  }

  remove(id: string) {
  
  }
}
