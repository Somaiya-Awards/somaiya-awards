import { generateLink } from "@/axios";

type ValueType = string | number | null;

type xlsxColumnType =
    | {
          label: string;
          value: string;
      }
    | {
          label: string;
          value: (row: { [key: string]: ValueType }) => ValueType | undefined;
      };

export const xlsxColumnsTeaching: xlsxColumnType[] = [
    { label: "ID", value: "id" },
    {
        label: "Faculty Name",
        value: "faculty_name",
    },
    {
        label: "Institution",
        value: "institution_name",
    },
    { label: "Designation", value: "designation" },
    {
        label: "Application Score (40%)",
        value: "applicationScore",
    },
    {
        label: "Feedback Score (60%)",
        value: "feedbackScore",
    },
    {
        label: "Total Score",
        value: (row) =>
            row.totalScore
                ? Number(Number(row.totalScore).toFixed(2))
                : Number(
                      (
                          Number(row.applicationScore) +
                          Number(row.feedbackScore)
                      ).toFixed(2)
                  ),
    },
    {
        label: "Group",
        value: (row) => (row.groups ? row.groups[0] + 1 : "null"),
    },
    {
        label: "File",
        value: (row) => generateLink(row.ieacApprovedFile as string),
    },
];

export const xlsxColumnsNonTeaching: xlsxColumnType[] = [
    { label: "ID", value: "id" },
    {
        label: "Staff Name",
        value: "staff_name",
    },
    {
        label: "Institution",
        value: "institution_name",
    },
    { label: "Designation", value: "designation" },
    {
        label: "Application Score (40%)",
        value: "applicationScore",
    },
    {
        label: "Feedback Score (60%)",
        value: "feedbackScore",
    },
    {
        label: "Total Score",
        value: (row) =>
            row.totalScore
                ? Number(Number(row.totalScore).toFixed(2))
                : Number(
                      (
                          Number(row.applicationScore) +
                          Number(row.feedbackScore)
                      ).toFixed(2)
                  ),
    },
    {
        label: "Group",
        value: (row) => (row.groups ? row.groups[0] + 1 : "null"),
    },
    {
        label: "File",
        value: (row) => generateLink(row.ieacApprovedFile as string),
    },
];

export const xlsxSportsGirl: xlsxColumnType[] = [
    { label: "ID", value: "id" },
    { label: "Email", value: "email_id" },
    { label: "Institution", value: "institute_name" },
    { label: "Nominee Sports Star Girl", value: "nominee_ss_girl" },
    { label: "Nominee Sports Star Girl Sport", value: "nominee_ss_girl_sport" },
    { label: "Q. 21", value: "q_21" },
    { label: "Q. 22", value: "q_22" },
    { label: "Q. 23", value: "q_23" },
    { label: "Q. 24", value: "q_24" },
    { label: "Final Score", value: "final_score" },
    {
        label: "Nominee Sports Star Girl Photo",
        value: (row) => generateLink(row.nominee_ss_girl_photo as string),
    },
    {
        label: "Nominee Sports Star Girl Supportings",
        value: (row) => generateLink(row.nominee_ss_girl_supportings as string),
    },
];

export const xlsxSportsBoy: xlsxColumnType[] = [
    { label: "ID", value: "id" },
    { label: "Email", value: "email_id" },
    { label: "Institution", value: "institute_name" },
    { label: "Nominee Sports Star Boy", value: "nominee_ss_boy" },
    { label: "Nominee Sports Star Boy Sport", value: "nominee_ss_boy_sport" },
    { label: "Q. 25", value: "q_25" },
    { label: "Q. 26", value: "q_26" },
    { label: "Q. 27", value: "q_27" },
    { label: "Q. 28", value: "q_28" },
    { label: "Final Score", value: "final_score" },
    {
        label: "Nominee Sports Star Boy Photo",
        value: (row) => generateLink(row.nominee_ss_boy_photo as string),
    },
    {
        label: "Nominee Sports Star Boy Supportings",
        value: (row) => generateLink(row.nominee_ss_boy_supportings as string),
    },
];

export const xlsxSportsCoach: xlsxColumnType[] = [
    { label: "ID", value: "id" },
    { label: "Email", value: "email_id" },
    { label: "Institution", value: "institute_name" },
    { label: "Nominee Coach", value: "nominee_inspiring_coach" },
    { label: "Q. 01", value: "q_01" },
    { label: "Q. 02", value: "q_02" },
    { label: "Q. 03", value: "q_03" },
    { label: "Q. 04", value: "q_04" },
    { label: "Q. 05", value: "q_05" },
    { label: "Q. 06", value: "q_06" },
    { label: "Q. 07", value: "q_07" },
    { label: "Q. 08", value: "q_08" },
    { label: "Q. 09", value: "q_09" },
    { label: "Q. 10", value: "q_10" },
    { label: "Q. 11", value: "q_11" },
    { label: "Q. 12", value: "q_12" },
    { label: "Q. 13", value: "q_13" },
    { label: "Q. 14", value: "q_14" },
    { label: "Q. 15", value: "q_15" },
    { label: "Q. 16", value: "q_16" },
    { label: "Q. 17", value: "q_17" },
    { label: "Q. 18", value: "q_18" },
    { label: "Q. 19", value: "q_19" },
    { label: "Q. 20", value: "q_20" },
    { label: "Final Score", value: "final_score" },
    {
        label: "Nominee Coach Photo",
        value: (row) => generateLink(row.nominee_coach_photo as string),
    },
    {
        label: "Nominee Coach Supportings",
        value: (row) => generateLink(row.nominee_coach_supportings as string),
    },
];
