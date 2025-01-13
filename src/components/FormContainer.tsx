import { prisma } from "@/lib/prisma";
import FormModal from "./FormModal";

export type FormContainerProps = {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number | string;
};
const FormContainer = async ({ table, type, data, id }: FormContainerProps) => {
  let relatedData;

  if (type !== "delete") {
    switch (table) {
      case "subject":
        const subTeachers = await prisma.teacher.findMany({
          select: { id: true, name: true, surname: true },
        });

        console.log(subTeachers);
        relatedData = { teachers: subTeachers };
        console.error(`Unhandled table type: ${table}`);
        break;
      case "class":
        const classGrades = await prisma.grade.findMany({
          select: { id: true, level: true },
        });
        const classTeachers = await prisma.teacher.findMany({
          select: { id: true, name: true, surname: true },
        });

        relatedData = { teachers: classTeachers, grades: classGrades };
        break;

      default:
        break;
    }
  }
  return (
    <div className="">
      <FormModal
        table={table}
        type={type}
        data={data}
        id={id}
        relatedData={relatedData}
      />
    </div>
  );
};

export default FormContainer;
