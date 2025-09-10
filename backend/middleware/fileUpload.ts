import multer, { DiskStorageOptions } from "multer";
import path from "path";
/**
 * NOTE: Uploads , storage 01-05 are used for form filling not for approvals
 * from 06- onwards they are approval handlers
 */

/**
 * SECTION FORM FILE UPLOAD HANDLER
 */

// file upload for outstanding institution form

const destinations = [
    "institution",
    "research",
    "sports",
    "faculty",
    "support",
    "approvals/IEAC/research",
    "approvals/IEAC/sports",
    "approvals/IEAC/teaching",
    "approvals/IEAC/support",
    "students",
    "results",
] as const;

type FileName = (typeof destinations)[number];

function multerDiskStorageFactory(folderName: FileName): DiskStorageOptions {
    return {
        destination: (req, file, cb) => {
            cb(null, `data/${folderName}`);
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + path.extname(file.originalname));
        },
    };
}

function multerFactory(idx: number) {
    return multer({
        storage: multer.diskStorage(
            multerDiskStorageFactory(destinations[idx])
        ),
    });
}

// file upload for outstanding institution form

// const storage01 = multer.diskStorage({
//     destination: (req, file, cb) => {
//         console.log(req, file);
//         cb(null, "data/institution");
//     },
//     filename: (req, file, cb) => {
//         console.log(req, file);
//         cb(null, Date.now() + path.extname(file.originalname));
//     },
// });
// const upload01 = multer({ storage: storage01 });
//
// // file upload for research forms
//
// const storage02 = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "data/research");
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     },
// });
//
// const upload02 = multer({ storage: storage02 });
//
// // file upload for sports forms
//
// const storage03 = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "data/sports");
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     },
// });
//
// const upload03 = multer({ storage: storage03 });
//
// // file upload for teaching forms
//
// const storage04 = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "data/faculty");
//     },
//
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     },
// });
//
// const upload04 = multer({ storage: storage04 });
//
// // file upload for non teaching forms
//
// const storage05 = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "data/support");
//     },
//
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     },
// });
//
// const upload05 = multer({ storage: storage05 });
//
// /**
//  * SECTION : IEAC FILE UPLOAD HANDLER
//  */
//
// // research form approval file handler
// /**@deprecated : IAEC Approval removed  */
// const storage06 = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "data/approvals/IEAC/research");
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     },
// });
//
// const upload06 = multer({ storage: storage06 });
//
// // sports form approval file handler
// /**@deprecated : IAEC Approval removed  */
//
// const storage07 = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "data/approvals/IEAC/sports");
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     },
// });
//
// const upload07 = multer({ storage: storage07 });
//
// // teaching form approval file handler
//
// const storage08 = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "data/approvals/IEAC/teaching");
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     },
// });
//
// const upload08 = multer({ storage: storage08 });
//
// // Non Teaching form approval file handler
// const storage09 = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "data/approvals/IEAC/support");
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     },
// });
//
// const upload09 = multer({ storage: storage09 });
//
// /**
//  * Awards FORM STORAGE ( STUDENTS )
//  */
//
// const storage10 = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "data/students");
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     },
// });
//
// const upload10 = multer({ storage: storage10 });
//
// /**
//  * Awards RESULTS STORAGE
//  */
//
// const storage11 = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "data/results");
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     },
// });
//
// const upload11 = multer({ storage: storage11 });
//
//
// TODO: Rename these now

export const upload01 = multerFactory(1);
export const upload02 = multerFactory(2);
export const upload03 = multerFactory(3);
export const upload04 = multerFactory(4);
export const upload05 = multerFactory(5);
export const upload06 = multerFactory(6);
export const upload07 = multerFactory(7);
export const upload08 = multerFactory(8);
export const upload09 = multerFactory(9);
export const upload10 = multerFactory(10);
export const upload11 = multerFactory(11);
