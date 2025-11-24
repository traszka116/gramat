const path = require('path');

const express = require('express')
const sqlite3 = require('sqlite3').verbose();
const app = express();

app.use(express.static(path.join(__dirname, '../frontend')));

const dbPath = './gramatDatabase.db';

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error('Database connection error:', err);
    else console.log('Connected to database');
});

function getExercise(exerciseId) {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM exercises WHERE exercise_id = ${exerciseId}`, [], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function getRandomExercise() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM exercises ORDER BY RANDOM() LIMIT 1', [], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function getExercisesByLesson(lessonId) {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM exercises WHERE lesson_id = ${lessonId}`, [], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

app.get('/', (req, res) => res.send('Gramat is running'));

app.get('/exercise/:id', async (req, res) => {
        try {
            const exerciseId = req.params.id;
            const exercises = await getExercise(exerciseId);
            res.json(exercises);
    } catch (err) {
            res.status(500).json({ error: err.message });
    }
});

app.get('/exercise/random', async (req, res) => {
        try {
            const exercises = await getRandomExercise();
            res.json(exercises);
    } catch (err) {
            res.status(500).json({ error: err.message });
    }
});

app.get('/exercise/', async (req, res) => {
        try {
            if (req.query.lesson_id) {
                const lessonId = req.query.lesson_id;
                const exercises = await getExercisesByLesson(lessonId);
                res.json(exercises);
                return;
            } else {
                res.status(400).json({ error: 'lesson_id query parameter is required' });
                return;
            }
    } catch (err) {
            res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => console.log('Gramat is running on port 3000!'));
