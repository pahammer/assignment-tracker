import requests, json, os

class Student():

    def __init__(self):
        self.token = os.getenv('CANVAS_TOKEN')
        self.server = os.getenv('CANVAS_SERVER')

    def get_courses(self):
        payload = {'Authorization': f'Bearer {self.token}'}

        r = requests.get(f'{self.server}api/v1/courses', headers=payload)

        if r.status_code == 200:
            return r.json()
        return []

    def get_assignments_by_course(self, course_id):
        payload = {'Authorization': f'Bearer {self.token}'}

        r = requests.get(f'{self.server}api/v1/courses/{course_id}/assignments', headers=payload, params={'bucket':'future'})

        if r.status_code == 200:
            return r.json()
        return []