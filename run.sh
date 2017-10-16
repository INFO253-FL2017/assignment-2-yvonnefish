#!/bin/bash

export FLASK_APP=webserver.py

export INFO253_MAILGUN_FROM_EMAIL='yvonne_yu@berkeley.edu'
export INFO253_MAILGUN_TO_EMAIL='yvonne_yu@berkeley.edu'
export INFO253_MAILGUN_API_KEY='key-8df3867f6757226f5d1295db8b255493'
export INFO253_MAILGUN_TO_USERNAME='api'

flask run --host=0.0.0.0
