import { create } from "zustand";

export const useAcademyStore = create((set) => ({
  courses: [],
  selectedCourse: null,

  setCourses: (courses) =>
    set({
      courses,
    }),

  openCourse: (course) =>
    set({
      selectedCourse: course,
    }),

  closeCourse: () =>
    set({
      selectedCourse: null,
    }),
}));
