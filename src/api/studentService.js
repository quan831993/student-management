import { instance } from ".";
export const STUDENT_GET = async () => {
    let response = await instance.get("students");
    return response.data;
};
export const STUDENT_POST = async (student) => {

    return await instance.post("students", student);
};
export const STUDENT_PUT = async (student) => {
    await instance.put("students/" + student.studentId, student);
};
export const STUDENT_PATCH = async (student) => {
    await instance.patch("students/" + student.studentId, student);
};
export const STUDENT_DELETE = async (id) => {
    await instance.delete(`students/${id}`);
};
