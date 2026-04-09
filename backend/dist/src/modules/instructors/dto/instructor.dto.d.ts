export declare class CreateAssignmentDto {
    moduleId: string;
    title: string;
    instructions: string;
    dueDate: string;
    maxScore: number;
}
export declare class GradeSubmissionDto {
    score: number;
    feedback?: string;
    status: string;
}
