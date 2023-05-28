import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { Project } from 'src/project/entities/project.entity';
export declare class EmployeeResolver {
    private employeeService;
    constructor(employeeService: EmployeeService);
    findAll(): Promise<Employee[]>;
    findOne(id: string): Promise<Employee>;
    create(employee: EmployeeCreateDTO): Promise<Employee>;
    project(employee: Employee): Promise<Project>;
}
