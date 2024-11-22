export type Student = {
  studentImage: string;
  id: number;
  name: string;
  age: number;
  grade: number;
  courses: any[]; // You may want to define a Course type
  teacher?: {
    id: number;
    // Add other teacher fields as needed
  };
  teacherId?: number;
  address: string;
  parentPhone: string;
  alternatePhone: string;
  email: string;
  birthdate: Date;
  gender: string;
  fatherName: string;
  motherName: string;
  fatherPhone: string;
  motherPhone: string;
  fatherEmail: string;
  motherEmail: string;
  fatherAddress: string;
  motherAddress: string;
  emergencyName: string;
  emergencyPhone: string;
  emergencyEmail: string;
  emergencyAddress: string;
  emergencyRelation: string;
};
