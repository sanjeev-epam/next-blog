
import StateCapsData from '../../data/state_capitals.json';

export default function handler(req, res) {
    res.status(200).json({ allData: StateCapsData[req.query.ABB] })
}  