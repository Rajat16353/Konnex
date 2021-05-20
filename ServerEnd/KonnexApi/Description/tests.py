from django import test
from django.test import TestCase
from .models import Description
# Create your tests here.


class DescriptionModelTestCase(TestCase):
    def setUp(self):
        Description.objects.create(
            fieldName="header", description="It is the header field")
        Description.objects.create(
            fieldName="footer", description="It is the footer field")

    def test_description_table_exists(self):
        self.assertTrue(Description.objects.exists())

    def test_object_exists(self):
        header = Description.objects.get(
            fieldName="header", description="It is the header field")
        footer = Description.objects.get(
            fieldName="footer", description="It is the footer field")


class DescriptionViewTestCase(TestCase):
    def setUp(self):
        Description.objects.create(
            fieldName="header", description="It is the header field")
        Description.objects.create(
            fieldName="footer", description="It is the footer field")

    def test_get_request(self):
        response = self.client.get('http://localhost:8000/descriptions/')
        self.assertEqual(response.status_code, 200)

    def test_post_request(self):
        response = self.client.post('http://localhost:8000/descriptions/',
                                    {'fieldName': 'name', 'description': 'testing name field'}, content_type='application/json')
        self.assertEqual(response.status_code, 201)

    def test_put_request(self):
        response = self.client.put('http://localhost:8000/descriptions/1/',
                                   {'fieldName': 'header', 'description': 'testing header field'}, content_type='application/json')
        self.assertEqual(response.status_code, 200)

    def test_delete_request(self):
        response = self.client.delete('http://localhost:8000/descriptions/1/')
        self.assertEqual(response.status_code, 204)
