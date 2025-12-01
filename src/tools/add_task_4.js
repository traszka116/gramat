//do dodania zadania do bazy na szybko

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../backend/gramatDatabase.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) return console.error('Błąd połączenia:', err.message);
    console.log('Połączono z bazą.');
});

db.serialize(() => {
    const id = 4;
    const lessonId = 1;
    const difficulty = 3;
    const questionTypeId = 1;
    const answerTypeId = 1;
    const question = "16 + 73";
    const answer = "89";
    
    const attachments = JSON.stringify({
        mode: "slider" 

    });

    const sql = `
        INSERT OR REPLACE INTO exercises (
            exercise_id, lesson_id, difficulty_id, 
            question_type_id, answer_type_id, 
            exercise_question, exercise_answer, exercise_attachments
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.run(sql, [id, lessonId, difficulty, questionTypeId, answerTypeId, question, answer, attachments], function(err) {
        if (err) return console.error("Błąd SQL:", err.message);
        console.log(`Dodano/Zaktualizowano zadanie ID=${id}!`);
    });
});

db.close();