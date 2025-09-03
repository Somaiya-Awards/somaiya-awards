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
    return {
        User: UserInit(sequelize),
        FeedbackOne: FeedbackOneInit(sequelize),
        FeedbackTwo: FeedbackTwoInit(sequelize),
        FeedbackThree: FeedbackThreeInit(sequelize),
        FeedbackFour: FeedbackFourInit(sequelize),
        FeedbackFive: FeedbackFiveInit(sequelize),
        NonTeaching: NonTeachingInit(sequelize),
        OutstandingInstitution: OutstandingInstitutionInit(sequelize),
        Research: ResearchInit(sequelize),
        Results: ResultsInit(sequelize),
        Sports: SportsInit(sequelize),
        Students: StudentsInit(sequelize),
        Teaching: TeachingInit(sequelize),
    };
}
