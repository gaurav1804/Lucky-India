import { base } from '../config';

export const getQuizList = async() => {
    let allQuiz: any = [];
    return base('Quiz').select().all()
    .then(function(records: any) {
        records.forEach(function(record: any) {
            allQuiz.push({
            id: record.id,
            startTime: record.get('StartTime'),
            EndTime: record.get('EndTime'),
            titleNumber: record.get('TitleNumber'),
            optionDetail: record.get('OptionDetail'),
            quizType: record.get('QuizType'),
            date: record.get('Date')
        });
        }); 
        return allQuiz;
    }).catch(function(err: any) {
        console.log('No record found, Please try again');
    })
}