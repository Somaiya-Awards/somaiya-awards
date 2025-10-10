import axios, { AxiosError, type AxiosRequestConfig } from "axios";
import { anyString, validString } from "../../../backend/zod";
import { CsrfName } from "../../../backend/constants";

export const BASE_URL = "https://apisomaiyaawards.somaiya.edu";
// export const BASE_URL = "http://localhost:5001";

interface Config extends AxiosRequestConfig {
  retry?: boolean;
}

export const URL = {
  AUTH: {
    LOGIN: `${BASE_URL}/auth/login`,
    LOGOUT: `${BASE_URL}/auth/logout`,
    FORGOT_PASSWORD: `${BASE_URL}/auth/forgot-password`,
    REFRESH: `${BASE_URL}/auth/refresh`,
    OTP_RESET: (id: string, token: string) => {
      const validId = anyString.parse(id);
      const validToken = anyString.parse(token);
      return `${BASE_URL}/auth/${validId}/${validToken}`;
    },
    VALIDATE: `${BASE_URL}/auth/validate`,
    REGISTER: `${BASE_URL}/auth/register`,
    BULK_CREATE: `${BASE_URL}/auth/bulk-create`,
  },

  ADMIN: {
    COUNT: {
      ALL: `${BASE_URL}/admin/data/count/all`,
      LAST_15: `${BASE_URL}/admin/data/count/15`,
      INSTITUTION_WISE: `${BASE_URL}/admin/data/count/institution-wise`,
      GROUPS: `${BASE_URL}/admin/data/count/group`,
    },
    USERS_LIST: `${BASE_URL}/admin/data/users`,
    FORMS: {
      SPORTS_COACH: `${BASE_URL}/admin/data/forms/sports-coach`,
      STUDENTS: `${BASE_URL}/admin/data/forms/students`,
      SPORTS_GIRL: `${BASE_URL}/admin/data/forms/sports-girl`,
      SPORTS_BOY: `${BASE_URL}/admin/data/forms/sports-boy`,
      NON_TEACHING: `${BASE_URL}/admin/data/forms/non-teaching`,
      OUTSTANDING_INSTITUTION: `${BASE_URL}/admin/data/forms/outstanding-institution`,
      FEEDBACK_01: `${BASE_URL}/admin/data/forms/feedback-01`,
      RESEARCH: `${BASE_URL}/admin/data/forms/research`,
      TEACHING: `${BASE_URL}/admin/data/forms/teaching`,
      FEEDBACK_02: `${BASE_URL}/admin/data/forms/feedback-02`,
      FEEDBACK_03: `${BASE_URL}/admin/data/forms/feedback-03`,
      FEEDBACK_04: `${BASE_URL}/admin/data/forms/feedback-04`,
    },
    RESULTS_HANDLER: `${BASE_URL}/admin/data/announce-results`,
    FORM_PREVIEW: (formType: string) => {
      const validForm = validString.parse(formType);
      return `${BASE_URL}/admin/data/${validForm}/preview`;
    },
    JURY_SUMMARY: {
      TEACHING: `${BASE_URL}/admin/data/jury-summary/teaching`,
      NON_TEACHING: `${BASE_URL}/admin/data/jury-summary/non-teaching`,
    },
    SCORECARD: {
      TEACHING: `${BASE_URL}/admin/data/teaching/scorecard`,
      NON_TEACHING: `${BASE_URL}/admin/data/non-teaching/scorecard`,
    },
    RESULTS: `${BASE_URL}/admin/data/results`,
    DELETE_USER: `${BASE_URL}/admin/data/delete-user`,
  },

  FORMS: {
    SPORTS: `${BASE_URL}/forms/sports`,
    TEACHING: `${BASE_URL}/forms/teaching`,
    STUDENTS: `${BASE_URL}/forms/students`,
    RESEARCH: `${BASE_URL}/forms/research`,
    NON_TEACHING: `${BASE_URL}/forms/non-teaching`,
    OUTSTANDING_INSTITUTION: `${BASE_URL}/forms/outstanding-institution`,
    FEEDBACK_01: `${BASE_URL}/forms/feedback-01`,
    FEEDBACK_02: `${BASE_URL}/forms/feedback-02`,
    FEEDBACK_03: `${BASE_URL}/forms/feedback-03`,
    FEEDBACK_04: `${BASE_URL}/forms/feedback-04`,
    FEEDBACK_05: `${BASE_URL}/forms/feedback-05`,
  },

  HOI: {
    STUDENTS: `${BASE_URL}/hoi/data/students`,
    NON_TEACHING: `${BASE_URL}/hoi/data/non-teaching`,
    SPORTS: `${BASE_URL}/hoi/data/sports`,
    TEACHING: `${BASE_URL}/hoi/data/teaching`,
    RESEARCH: `${BASE_URL}/hoi/data/research`,
    OUTSTANDING_INSTITUTION: `${BASE_URL}/hoi/data/outstanding-institution`,
  },

  IEAC: {
    OUTSTANDING_INSTITUTION: `${BASE_URL}/ieac/data/outstanding-institution`,
    NOMINATED_STAFF: `${BASE_URL}/ieac/data/nominated-staff-names`,
    TEACHING: `${BASE_URL}/ieac/data/teaching`,
    NON_TEACHING: `${BASE_URL}/ieac/data/non-teaching`,
    NOMINATED_FACULTY: `${BASE_URL}/ieac/data/nominated-faculty-names`,
  },

  RESEARCH_ADMIN: {
    UPDATE: `${BASE_URL}/research-data/data/update`,
    RESEARCH: `${BASE_URL}/research-data/data/research`,
  },

  SPORTS_ADMIN: {
    INSPIRING_COACH: `${BASE_URL}/sports-admin/data/inspiring-coach`,
    NOMINATED_COACH: `${BASE_URL}/sports-admin/data/nominated-coach-names`,
    SPORTS_STAR_BOY: `${BASE_URL}/sports-admin/data/sports-star-boy`,
    SPORTS_STAR_GIRL: `${BASE_URL}/sports-admin/data/sports-star-girl`,
    UPDATE: `${BASE_URL}/sports-admin/data/update`,
  },

  STUDENTS_ADMIN: {
    STAR_CITIZEN: `${BASE_URL}/students-admin/data/somaiya-star-citizen`,
    GREEN_STAR: `${BASE_URL}/students-admin/data/somaiya-green-star`,
    STAR_INNOVATOR: `${BASE_URL}/students-admin/data/somaiya-star-innovator`,
    UPDATE: `${BASE_URL}/students-admin/data/update`,
    STAR_BOY: `${BASE_URL}/students-admin/data/somaiya-star-boy`,
    STAR_GIRL: `${BASE_URL}/students-admin/data/somaiya-star-girl`,
  },
};

const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Request-Origin": BASE_URL,
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

Axios.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("x-csrf");

  if (token !== null && config.headers) {
    config.headers["x-csrf"] = token;
  }

  return config;
});

Axios.interceptors.response.use(
  (response) => {
    const header = response.headers;
    if (header[CsrfName]) localStorage.setItem(CsrfName, header[CsrfName]);
    return response;
  },

  async (error: AxiosError) => {
    const config = error.config as Config;

    if (!config) return Promise.reject(error);

    if (config.retry) {
      return Promise.reject(error);
    }

    config.retry = true;

    try {
      await axios.post(
        URL.AUTH.REFRESH,
        {},
        {
          headers: {
            "Request-Origin": BASE_URL,
            "Content-Type": "application/json",
            "x-csrf": localStorage.getItem("x-csrf") || "",
          },
          withCredentials: true,
        }
      );

      return Axios(config);
    } catch (err) {
      return Promise.reject(err);
    }
  }
);

export default Axios;
