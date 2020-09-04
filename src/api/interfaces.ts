import { WorkingDays } from "../models/WorkingDays";
import { YearSemester } from "../models/yearSemester";
import { Buildings } from "../models/Buildings";
import { Rooms } from "../models/Rooms";


export interface WorkingDaysCreateData {
  name: string;
  workingHours: {
    hours: number;
    mins: number;
  };
  selectedDays: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
  prefferedTimeSlots: {
    thirty: boolean;
    sixty: boolean;
  };
}

export interface WorkingDaysUpdateData {
  _id: string;
  name: string;
  workingHours: {
    hours: number;
    mins: number;
  };
  selectedDays: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
  prefferedTimeSlots: {
    thirty: boolean;
    sixty: boolean;
  };
}

export interface WorkingDaysListResponse {
  success: boolean;
  data: WorkingDays[];
}

export interface YearSemesterCreateData {
  year: string;
  semester: string;
}

export interface YearSemesterUpdateData {
  _id: string;
  year: string;
  semester: string;
}

export interface YearSemesterListResponse {
  success: boolean;
  data: YearSemester[];
}

export interface ProgrammeCreateData {
  name: string;
}

export interface ProgrammeUpdateData {
  _id: string;
  name: string;
}

export interface TimetableCreateData {
  name: string;
  workingDaysId: string;
  batch: string;
  subGroup: string;
  timetable: [];
}

export interface TimetableUpdateData {
  _id: string;
  name: string;
  workingDaysId: string;
  batch: string;
  subGroup: string;
  timetable: [];
}

export interface GroupCreateData {
  number: string;
}

export interface GroupUpdateData {
  _id: string;
  number: string;
}

export interface SubGroupCreateData {
  number: string;
}

export interface SubGroupUpdateData {
  _id: string;
  number: string;
}

export interface TagsCreateData {
  name: string;
}

export interface TagsUpdateData {
  _id: string;
  name: string;
=======
export interface BuildingsCreateData {
  name: string;
}

export interface BuildingUpdateData {
  _id: string;
  name: string;
}

export interface BuildingsListResponse {
  success: boolean;
  data: Buildings[];
}

export interface RoomsCreateData {
  buildingName: string;
  roomType: boolean;
  rooms: string[];
}

export interface RoomsUpdateData {
  _id: string;
  buildingName: string;
  roomType: boolean;
  rooms: string[];
}

export interface RoomsListResponse {
  success: boolean;
  data: Rooms[];
}

export interface LecturerCreateData {
  name: string;
  employeeId: string;
  faculty: string;
  department: string;
  centre: string;
  building: string;
  level: number;
  rank: string;
}

export interface LecturerUpdateData {
  _id: string;
  name: string;
  employeeId: string;
  faculty: string;
  department: string;
  centre: string;
  building: string;
  level: number;
  rank: string;
}
