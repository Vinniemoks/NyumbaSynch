const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // for allowing cross-origin requests

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// Dummy data (replace with database interaction in a real app)
let properties = [
    { id: 1, name: 'Apartment 1', address: '123 Main St', rent: 1000 },
    { id: 2, name: 'House 2', address: '456 Oak Ave', rent: 1500 }
];

let tenants = [
    { id: 1, propertyId: 1, name: 'John Doe', contact: 'john@example.com' }
];

let payments = [];

let maintenance = [];

// *** API Endpoints ***

// GET properties
app.get('/api/properties', (req, res) => {
    res.json(properties);
});

// POST properties
app.post('/api/properties', (req, res) => {
    const newProperty = {
        id: properties.length + 1,
        name: req.body.name,
        address: req.body.address,
        rent: req.body.rent
    };
    properties.push(newProperty);
    res.status(201).json(newProperty);
});

// GET tenants
app.get('/api/tenants', (req, res) => {
    res.json(tenants);
});

// POST tenants
app.post('/api/tenants', (req, res) => {
    const newTenant = {
        id: tenants.length + 1,
        propertyId: req.body.propertyId,
        name: req.body.name,
        contact: req.body.contact
    };
    tenants.push(newTenant);
    res.status(201).json(newTenant);
});

// POST payments (record a payment)
app.post('/api/payments', (req, res) => {
    const newPayment = {
        id: payments.length + 1,
        tenantId: req.body.tenantId,
        amount: req.body.amount,
        date: new Date()
    };
    payments.push(newPayment);
    res.status(201).json(newPayment);
});

// GET maintenace requests
app.get('/api/maintenance', (req, res) => {
  res.json(maintenance);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
