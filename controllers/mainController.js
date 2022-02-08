module.exports.student_GET = (req, res) => {
    res.json('dfss')
}

module.exports.student_POST = (req, res) => {
    const { fname,lname } = req.body;
    res.json({ fname,lname });
}