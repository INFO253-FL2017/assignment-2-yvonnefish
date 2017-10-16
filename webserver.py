"""
webserver.py

File that is the central location of code for your webserver.
"""

from flask import Flask, render_template, request
import os
import requests

# Create application, and point static path (where static resources like images, css, and js files are stored) to the
# "static folder"
app = Flask(__name__,static_url_path="/static")

@app.route('/')
def load_default():
    return render_template("index.html")

@app.route('/index')
def load_index():
    """
    If someone goes to the root of your website (i.e. http://localhost:5000/), run this function. The string that this
    returns will be sent to the browser
    """
    return render_template("index.html") # Render the template located in "templates/index.html"

@app.route('/about')
def load_about():
    return render_template("about.html")

@app.route('/contact', methods=['GET'])
def load_contact():
    return render_template("contact.html")

@app.route('/contact', methods=['POST'])
def send_contact():
    print(request)
    print(request.form)
    print (request.form['Message'])
    
    message = request.form.get("Message")
    subject = request.form.get("Subject")
    name = request.form.get("Name")
    notifications = []
    """
    data = {
        'from': os.environ["INFO253_MAILGUN_FROM_EMAIL"],
        'to': os.environ["INFO253_MAILGUN_TO_EMAIL"],
        'name': number,
        'subject': subject,
        'text': message,
    }
    """
    requests.post(
        "https://api.mailgun.net/v3/sandboxfa36a7fcf4b54014909aaa136c625393.mailgun.org/messages",
        auth=("api", "key-8df3867f6757226f5d1295db8b255493"),
        data={"from": os.environ["INFO253_MAILGUN_FROM_EMAIL"],
              "to": os.environ["INFO253_MAILGUN_TO_EMAIL"],
              "subject": subject,
              #"name": name,
              "text": message})

    return render_template("contact_success.html", NAME=name)


    """
        <html>
            <body>
                {NAME}, your message has been sent
            </body>
        </html>
#    """#.format(NAME=name)
    #return ", your message has been sent"

@app.route('/blog/8-experiments-in-motivation')
def load_blog_8experiments():
    return render_template("raw_content/8_Experiments_in_Motivation.html")

@app.route('/blog/a-mindful-shift-of-focus')
def load_blog_amindful():
    return render_template("raw_content/A_Mindful_Shift_of_Focus.html")

@app.route('/blog/how-to-develop-an-awesome-sense-of-direction')
def load_blog_howtodev():
    return render_template("raw_content/How_to_Develop_an_Awesome_Sense_of_Direction.html")

@app.route('/blog/training-to-be-a-good-writer')
def load_blog_training():
    return render_template("raw_content/Training_to_Be_a_Good_Writer.html")

@app.route('/blog/what-productivity-systems-wont-solve')
def load_blog_what():
    return render_template("raw_content/What_Productivity_Systems_Wont_Solve.html")






