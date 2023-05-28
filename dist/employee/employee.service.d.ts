import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { ProjectService } from 'src/project/project.service';
import { Project } from 'src/project/entities/project.entity';
export declare class EmployeeService {
    private employeeRepository;
    private projectService;
    constructor(employeeRepository: Repository<Employee>, projectService: ProjectService);
    findAll(): Promise<Employee[]>;
    findOne(id: string): Promise<Employee>;
    create(employee: EmployeeCreateDTO): Promise<Employee>;
    getProject(id: string): Promise<Project>;
}
