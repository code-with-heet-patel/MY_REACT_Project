// src/components/AddSubject.js
import React, { useState } from 'react';

const AddSubject = ({ onAdd }) => {
    const [subject, setSubject] = useState({ name: '', time: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubject({ ...subject, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(subject);
        setSubject({ name: '', time: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <h3>Add Subject</h3>
            <div className="mb-3">
                <input
                    type="text"
                    name="name"
                    value={subject.name}
                    onChange={handleChange}
                    placeholder="Subject Name"
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type="number"
                    name="time"
                    value={subject.time}
                    onChange={handleChange}
                    placeholder="Time in Hours"
                    className="form-control"
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Subject</button>
        </form>
    );
};

export default AddSubject;
