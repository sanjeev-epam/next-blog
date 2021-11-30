
import StateCapsData from '../../data/state_capitals.json';

export default function handler(req, res) {
    res.status(200).json({ data: StateCapsData[req.query.ABB] })
}  