from django.test import TestCase
from .models import Announcement
# Create your tests here.


class AnnouncementModelTestCase(TestCase):
    def setUp(self):
        Announcement.objects.create(
            title="header", announcement="It is the header field")
        Announcement.objects.create(
            title="footer", announcement="It is the footer field")

    def test_announcement_table_exists(self):
        self.assertTrue(Announcement.objects.exists())

    def test_object_exists(self):
        header = Announcement.objects.get(
            title="header", announcement="It is the header field")
        footer = Announcement.objects.get(
            title="footer", announcement="It is the footer field")


class AnnouncementViewTestCase(TestCase):
    def setUp(self):
        Announcement.objects.create(
            title="header", announcement="It is the header field")
        Announcement.objects.create(
            title="footer", announcement="It is the footer field")

    def test_get_request(self):
        response = self.client.get('http://localhost:8000/announcements/')
        self.assertEqual(response.status_code, 200)

    def test_post_request(self):
        response = self.client.post('http://localhost:8000/announcements/',
                                    {'title': 'name', 'announcement': 'testing name field'}, content_type='application/json')
        self.assertEqual(response.status_code, 201)

    def test_put_request(self):
        response = self.client.put('http://localhost:8000/announcements/1/',
                                   {'title': 'header', 'announcement': 'testing header field'}, content_type='application/json')
        self.assertEqual(response.status_code, 200)

    def test_delete_request(self):
        response = self.client.delete('http://localhost:8000/announcements/1/')
        self.assertEqual(response.status_code, 204)
