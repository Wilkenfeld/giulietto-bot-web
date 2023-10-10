from flask import Flask, render_template, request
import os
from db.services.absences import create_absence
from services.absences import absences

app = Flask(__name__, template_folder = os.path.abspath('../../dist'), static_folder = os.path.abspath("../../dist"), static_url_path="/")

app.register_blueprint(absences)

# @app.route('/')
# def test():
#     print(request.args)
#     user_id = request.args['user_id']
#     return render_template('pages/root.html', label="asd", page="absences/new_absence.html", telegram=True, user={id: user_id})
