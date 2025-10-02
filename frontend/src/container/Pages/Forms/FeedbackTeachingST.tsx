import Navbar from "../../../components/Navbar";
import FormInfo from "../../../components/FormInfo";
import Forms from "../../../components/Forms";
import StudentTeachingFeedback from "../../../components/utils/data/StudentTeachingFeedback";
import StudentTeachingFeedbackForm from "../../../data/Forms/StudentTeachingFeedbackForm";
import Footer from "../../../components/Footer";

export default function FeedbackTeachingST() {
    const headings = [
        "Student Details",
        "Details of the teacher to be evaluated",
        "Your Feedback about the Teacher",
        "Review",
    ];
    const limit = headings.length - 1;
    const message =
        "In Feedback Section of Teaching Staff 1 represents lowest marks and 5 is considered as highest";
    const aboutForm =
        "The feedback form is essential for students to share their thoughts and suggestions, allowing the teaching staff to continuously improve their performance. By providing feedback, students help the teaching staff understand their needs better, fostering a collaborative and supportive learning environment. This form promotes open communication and enables the teaching staff to assess their teaching methods, ensuring high-quality education for students.";
    return (
        <div>
            <Navbar />
            <FormInfo
                title="Student's Feedback- Teaching Staff"
                info={aboutForm}
            />

            <Forms
                pageHeadings={headings}
                pageCount={limit}
                data={StudentTeachingFeedbackForm}
                stages={StudentTeachingFeedback}
                message={message}
            />

            <div className="mt-[5rem]">
                <Footer />
            </div>
        </div>
    );
}
