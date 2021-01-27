from django.test import TestCase
from api.models import Pack

# Create your tests here.
class TestPackCreateForm(TestCase):
    def test_can_create_pack(self):
        data = {
            "code": "XMLHTM",
            "host": "l6eh9jrorsjuf9jqd1hdfgijflbxmm8d",
            "pet_name": "Rocco"
        }
        response = self.client.post("/pack/", data=data)
        self.assertEqual(Pack.objects.count(), 1)
        self.assertRedirects(response, "/add-pack/")

# class Pack(models.Model):
#     code = models.CharField(max_length=8, default=generate_unique_code, unique=True)
#     host = models.CharField(max_length=50, unique=True)
#     pet_name = models.CharField(max_length=50)
#     created_at = models.DateTimeField(auto_now_add=True)