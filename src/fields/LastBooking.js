import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function LastBooking() {
    const [lastBooking, setLastBooking] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/v1/users")
            .then((response) => response.json())
            .then((data) => setLastBooking(data))
            .catch((error) => {
                console.error("Error fetching last bookings:", error);
            });
    }, []);

    return (
        <div className="border-2 border-gray-500 rounded-lg">
            <h1 className="text-center font-serif tracking-widest"> Last Booking Details </h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="text-center font-sans tracking-widest">Movie</th>
                        <th className="text-center font-sans tracking-widest">Time</th>
                        <th className="text-center font-sans tracking-widest">Seats</th>
                    </tr>
                </thead>
                <tbody>
                    {lastBooking.map((item) => (
                        <tr key={item.id}>
                            <td className="text-center font-mono tracking-wider">{item.movie}</td>
                            <td className="text-center font-mono tracking-wider">{item.time}</td>
                            <td className="text-center font-mono tracking-wider">{typeof item.seats === 'object' ? JSON.stringify(item.seats) : item.seats}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
