from flask import render_template
import requests
import json
import pprint

from requests.api import request
from app import app

@app.route("/")
def index():
    user = {"username": "Harvey"}
    return render_template('homepage/index.html', title='Homepage', user=user)

@app.route("/about")
def about():
    return render_template('aboutPage/about.html', title='About me')

@app.route("/contact")
def contact():
    return render_template('contactPage/contact.html', title='Contact Page')

@app.route("/portfolio")
def portfolio():
    response_API = requests.get('https://api.github.com/users/HarveyWilliamson06/repos')
    data = response_API.text
    parse_json = json.loads(data)
    # reposList = { "full_name": [], "url": [] }
    # for i in range(0, len(parse_json)):
    #     reposList['full_name'].append(parse_json[i]["full_name"])
    #     reposList['url'].append(parse_json[i][i]["html_url"])

    # ÷print(reposList)
    return render_template('portfolioPage/portfolio.html', title='Portfolio', repos=parse_json)