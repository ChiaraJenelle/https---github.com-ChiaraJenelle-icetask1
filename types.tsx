import React from "react";

export type Task = {
  id: number;
  task: string;
  name: string;        // Added name field
  surname: string;     // Added surname field
  studentNumber: string; // Added student number field
};

export type RootParamList = {
  ViewScreen: undefined;
  AddTaskScreen: undefined;
};