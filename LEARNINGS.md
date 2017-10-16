1. What is the function of the following technologies in your assignment:
- HTML is providing the semantic meaning of the web page
- CSS is providing the presentation of web page
- JavaScript introduce logic to the html page, for example button click events
- Python is used to program the server logic
- Flask is running the webserver file at the specfied IP
- HTTP is the protocol for which data transfer across the internet
- GET and POST requests are http requests and responses



2. How does HTML, CSS, and JavaScript work together in the browser for this assignment?
HTML structures the content, CSS specify the visual look and feel, and javascript powers the interactivity.

3. How does Python and Flask work together in the server for this assignment?
Flask translates http requests to the right web pages useing routes specfied in the web server programmed in python


4. List all of the possible GET and POST requests that your server returns a response for and describes what happens for each GET and POST request
@app.route('/') -> renders the index.html page

@app.route('/index') -> renders the index.html page

@app.route('/about') -> renders the about.html page

@app.route('/contact', methods=['GET']) -> renders the contact.html page

@app.route('/contact', methods=['POST']) -> sends data entered in contact html to the web server


-renders respective blog html pages
@app.route('/blog/8-experiments-in-motivation')
@app.route('/blog/a-mindful-shift-of-focus')
@app.route('/blog/how-to-develop-an-awesome-sense-of-direction')
@app.route('/blog/training-to-be-a-good-writer')
@app.route('/blog/what-productivity-systems-wont-solve')


