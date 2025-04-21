const express = require('express');
const router = express.Router();
const prisma = require('../prisma'); // ✅ Correct import

// GET route to fetch all employees
router.get('/', async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();
    res.status(200).json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).send('Server error');
  }
});

// POST route for adding a new employee
router.post('/', async (req, res) => {
  try {
    console.log('👉 Received data:', req.body); // 🧠 debug here

    const {
      name, age, salary, designation, department,
      dateOfJoining, dateOfLeaving
    } = req.body;

    const newEmployee = await prisma.employee.create({
      data: {
        name,
        age: parseInt(age),
        salary: parseFloat(salary),
        designation,
        department,
        dateOfJoining: new Date(dateOfJoining),
        dateOfLeaving: dateOfLeaving ? new Date(dateOfLeaving) : null
      }
    });

    res.status(201).json(newEmployee);
  } catch (error) {
    console.error('❌ Error creating employee:', error);
    res.status(500).send(error.message); // Send actual error message back
  }
});


module.exports = router;
