import UserInit from "./User";
import FeedbackOneInit from "./FeedbackOne";
import FeedbackTwoInit from "./FeedbackTwo";
import FeedbackThreeInit from "./FeedbackThree";
import FeedbackFourInit from "./FeedbackFour";
import FeedbackFiveInit from "./FeedbackFive";
import NonTeachingInit from "./NonTeaching";
import OutstandingInstitutionInit from "./OutstandingInstitution";
import ResearchInit from "./Research";
import ResultsInit from "./Results";
import SportsInit from "./Sports";
import StudentsInit from "./Students";
import TeachingInit from "./Teaching";
import { Sequelize } from "sequelize";

export default function InitDB(sequelize: Sequelize) {
    let tables = [
        UserInit,
        FeedbackOneInit,
        FeedbackTwoInit,
        FeedbackThreeInit,
        FeedbackFourInit,
        FeedbackFiveInit,
        NonTeachingInit,
        OutstandingInstitutionInit,
        ResearchInit,
        ResultsInit,
        SportsInit,
        StudentsInit,
        TeachingInit,
    ];

    for (let table of tables) {
        table(sequelize);
    }
}
