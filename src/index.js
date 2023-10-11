//author: Raul Condolo
// git: https://github.com/krcondolo/api_tech_test



//we call express
const express = require('express');
const app = express();
//fuction for fibo and n parametrer
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
//route
app.get('/fibonacci', (req, res) => {
    const n = parseInt(req.query.n);
    const result = fibonacci(n);
    res.json({ fibonacci_value: result });
});
//port we can change it for another
const PORT = process.env.PORT || 3000;

//listening app
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});