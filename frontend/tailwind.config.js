/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{ts,tsx}"];
export const theme = {
    extend: {
        fontFamily: {
            Poppins: ["Poppins", "sans-serif"],
            Roboto: ["Roboto", "sans-serif"],
        },
    },
};
export const plugins = [];
