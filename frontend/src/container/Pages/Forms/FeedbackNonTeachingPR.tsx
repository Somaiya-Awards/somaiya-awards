import FormInfo from "../../../components/FormInfo";
import Navbar from "../../../components/Navbar";
import Forms from "../../../components/Forms";
import PeerNonTeachingFeedbackForm from "../../../data/Forms/PeerNonTeachingFeedbackForm";
import FeedbackPeerNonTeaching from "../../../components/utils/data/FeebackPeerNonTeaching";
import Footer from "../../../components/Footer";
import React from "react";
import PeerNonTeachingFeedbackFormValidator from "../../../zod/Forms/PeerNonTeachingFeedbackForm";

export default function FeedbackNonTeachingPR() {
    const title = "Peers Feedback Form for Non Teaching";
    const headings = ["Basic Information", "Nominee Ratings", "Review"];
    const limit = headings.length - 1;
    const aboutForm =
        "The peers' feedback form for non-teaching staff promotes collaboration, growth, and continuous improvement. It allows colleagues to provide constructive input on performance, helping non-teaching staff refine their skills and enhance services for the benefit of students and the institution.";

    return (
        <div>
            <Navbar />

            <FormInfo title={title} info={aboutForm} />

            <Forms
                pageHeadings={headings}
                pageCount={limit}
                data={PeerNonTeachingFeedbackForm}
                stages={FeedbackPeerNonTeaching}
                validator={PeerNonTeachingFeedbackFormValidator}
            />

            <div className="mt-[5rem]">
                <Footer />
            </div>
        </div>
    );
}
