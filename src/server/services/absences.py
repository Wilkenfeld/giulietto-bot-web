from flask import Blueprint, request, render_template
from db.services.absences import create_absence, get_all_absences
from datetime import datetime

absences = Blueprint('absences', __name__, url_prefix="/absences")

@absences.route('/new_absence')
def new_absence():
    user_id = request.args['user_id']
    page = render_template('absences/new_absence.html', user={'id': user_id}, min_date=datetime.now().isoformat()[:10])
    res = render_template('pages/root.html', page=page, telegram=True, user={id: user_id})
    return res

@absences.route('/', methods=["POST"])
def save_new_absence():
    print(request.form)
    form = request.form
    absence_id = create_absence(form['user_id'], form['from'], form['to'])
    page = render_template('pages/creation_success.html', title="Assenza registrata", description="L'assenza è stata registrata correttamente. Riceverai un messaggio di riepilogo.")
    return render_template('pages/root.html', page=page, telegram=True)
