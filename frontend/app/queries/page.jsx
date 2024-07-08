'use client'
import React, { useEffect, useState } from "react";

const QueriesPage = () => {
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        fetch('/api/queries')
            .then(response => response.json())
            .then(data => {
                setQueries(data);
            })
            .catch(error => {
                console.error('Error fetching queries:', error);
            });
    }, []);

    const handleCheckboxChange = async (_id, isChecked) => {
        try {
            const response = await fetch(`/api/queries/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ isAnswered: isChecked }),
            });

            if (response.ok) {
                // Update the local state of queries
                const updatedQueries = queries.map(query =>
                    query._id === _id ? { ...query, isAnswered: isChecked } : query
                );
                setQueries(updatedQueries);
            } else {
                throw new Error('Failed to update query');
            }
        } catch (error) {
            console.error('Error updating query:', error);
        }
    };

    return (
        <section className="mx-auto max-w-[80%] m-8 text-center">
            <div className="m-4">
                <div className="text-2xl font-bold mb-4">Queries</div>
                {queries.map(query => (
                    <div key={query._id} className="mb-4 p-4 border rounded-md">
                        <p className="font-semibold">Email: {query.userEmail}</p>
                        <p className="mt-2">Query: {query.query}</p>
                        <label className="inline-flex items-center mt-2">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-blue-600"
                                checked={query.isAnswered}
                                onChange={(e) => handleCheckboxChange(query._id, e.target.checked)}
                            />
                            <span className="ml-2 text-sm">Is Answered?</span>
                        </label>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default QueriesPage;