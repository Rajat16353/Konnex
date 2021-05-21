from django import test
from django.test import TestCase
from .models import Bug
# Create your tests here.


class BugModelTestCase(TestCase):
    def setUp(self):
        Bug.objects.create(
            site_id="header", report="It is the header field", status="pending")
        Bug.objects.create(
            site_id="footer", report="It is the footer field", status="fixed")

    def test_Bug_table_exists(self):
        self.assertTrue(Bug.objects.exists())

    def test_object_exists(self):
        header = Bug.objects.get(
            site_id="header", report="It is the header field")
        footer = Bug.objects.get(
            site_id="footer", report="It is the footer field")


class BugViewTestCase(TestCase):
    def setUp(self):
        Bug.objects.create(
            site_id="header", report="It is the header field", status="pending")
        Bug.objects.create(
            site_id="footer", report="It is the footer field", status="fixed")

    def test_get_request(self):
        response = self.client.get('http://localhost:8000/bugs/')
        self.assertEqual(response.status_code, 200)

    def test_post_request(self):
        response = self.client.post('http://localhost:8000/bugs/',
                                    {'site_id': 'name', 'report': 'testing bug name field', 'status': 'pending'}, content_type='application/json')
        self.assertEqual(response.status_code, 201)
