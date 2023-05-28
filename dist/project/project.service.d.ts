import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
export declare class ProjectService {
    private projectRepository;
    constructor(projectRepository: Repository<Project>);
    create(project: CreateProjectInput): Promise<Project>;
    findAll(): Promise<Project[]>;
    findOne(id: string): Promise<Project>;
    update(id: string, updateProjectInput: UpdateProjectInput): Promise<Project>;
    remove(id: string): void;
}
