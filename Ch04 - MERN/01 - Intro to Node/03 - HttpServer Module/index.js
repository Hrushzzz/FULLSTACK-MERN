const http = require("http");
// const { title } = require("process");

// creating a Server :
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(`
            <html>
                <body>
                    <h1>
                        Home Page
                    </h1>
                </body>
            </html>
        `);
        res.end();
    }

    if (req.url === '/contact') {
        res.write(`
            <html>
                <body>
                    <h1>
                        Contact Page
                    </h1>
                </body>
            </html>
        `);
        res.end();
    }

    if (req.url === '/api/products') {
        const products = [{
            id: 1,
            title: "Product 1"
        },{
            id: 2,
            title: "Product 2"
        },{
            id: 3,
            title: "Product 3"
        }];

        try {
            // throw new Error('Something went wrong');
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(products));
            res.end();
        } catch (e) {
            res.statusCode = 500;
            res.write(e.message);
            res.end();
        }
    }   
});
    

// server.listen ==> start a server
server.listen(5001, () => {
    console.log("Server is running at https://localhost:5001");
});



// res.write() ==> method is used to send chunks of the response body to the client. 
// You can call it multiple times to send data in pieces.

// res.end() ==> method signals that the response has been completed. 
// It optionally sends the final data to the client.

// res.setHeader() method is used to set a specific HTTP header for the response. 
// It allows you to define headers that provide metadata about the response, 
// such as content type, caching policies, or custom headers.


// NOTE :: refer to more HTTP module methods here ===>https://nodejs.org/api/http.html