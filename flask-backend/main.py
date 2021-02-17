from flask import Flask, request, make_response, json

from api import Student

app = Flask(__name__)

@app.route('/courses', methods=['GET'])
def get_courses():

    resp = make_response()
    # cors open for development purposes
    resp.headers.add("Access-Control-Allow-Origin", "*")
    resp.set_data(str(json.dumps(student.get_courses())))

    return resp

@app.route('/course/assignments/<course_id>', methods=['GET'])
def get_assignments_by_course(course_id):

    resp = make_response()
    # cors open for development purposes
    resp.headers.add("Access-Control-Allow-Origin", "*")

    resp.set_data(str(json.dumps(student.get_assignments_by_course(course_id))))

    return resp

if __name__ == "__main__":
    student = Student()
    app.run(debug=True, port=5000)
