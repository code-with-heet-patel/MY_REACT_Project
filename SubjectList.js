// src/components/SubjectList.js
import React from 'react';

const SubjectList = ({ subjects, onEdit, onDelete }) => {
    return (
        <div className="mt-4">
            <h3>Subjects</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Time (Hours)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {subjects.map((subject, index) => (
                        <tr key={index}>
                            <td>{subject.name}</td>
                            <td>{subject.time}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => onEdit(subject)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => onDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SubjectList;
