import json
from django.test import TestCase

# Create your tests here.


class ChatbotViewTestCase(TestCase):
    def test_get_request(self):
        response = self.client.get('http://localhost:8000/chatbot/')
        self.assertEqual(response.status_code, 404)

    def test_post_request(self):
        response = self.client.post('http://localhost:8000/chatbot/', {
                                    'message': "This is a test case"}, content_type='application/json')
        self.assertEqual(response.status_code, 200)
        response = json.loads(response.content)
        self.assertEqual(response['response'], "This is a test case")
