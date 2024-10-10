// src/App.js
import React, { useState, useEffect } from 'react';
import SubjectList from './components/SubjectList';
import AddSubject from './components/AddSubject';

const App = () => {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const storedSubjects = JSON.parse(localStorage.getItem('subjects'));
        if (storedSubjects) {
            setSubjects(storedSubjects);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('subjects', JSON.stringify(subjects));
    }, [subjects]);

    const addSubject = (subject) => {
        setSubjects([...subjects, subject]);
    };

    const deleteSubject = (index) => {
        const newSubjects = subjects.filter((_, i) => i !== index);
        setSubjects(newSubjects);
    };

    const editSubject = (subject) => {
        const newSubjects = subjects.map((sub) => sub.name === subject.name ? subject : sub);
        setSubjects(newSubjects);
    };

    return (
        <div className="container">
            <h1 className="mt-4">Student Daily Routine</h1>
            <AddSubject onAdd={addSubject} />
            <SubjectList subjects={subjects} onDelete={deleteSubject} onEdit={editSubject} />
        </div>
    );
};

export default App;
