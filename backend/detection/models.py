from django.db import models
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
from complaints.models import Complaint
class Detection(models.Model):
    complaint = models.ForeignKey(
    Complaint,
    on_delete=models.CASCADE,
    null=True,
    blank=True,
    related_name="detections"
)
<<<<<<< HEAD

    # Mobile scanner info
    deviceId = models.CharField(max_length=100, null=True, blank=True)

    # Location
    locationText = models.CharField(max_length=255, null=True, blank=True)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)

    # Image captured by mobile camera
    detectedImage = models.ImageField(upload_to="detected_vehicle_pictures/", null=True, blank=True)

    detectedAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Detection of {self.complaint.plateNumber}"
    
class UnknownVehicle(models.Model):
    vehicleColor = models.CharField(max_length=50, null=True, blank=True)
    detectedAt = models.DateTimeField(auto_now_add=True)

    locationText = models.CharField(max_length=255, null=True, blank=True)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)

    image = models.ImageField(upload_to="unknown_vehicles/", null=True, blank=True)

    def __str__(self):
        return f"Unknown Vehicle - {self.detectedAt}"
=======

    # Mobile scanner info
    deviceId = models.CharField(max_length=100, null=True, blank=True)

    # Location
    locationText = models.CharField(max_length=255, null=True, blank=True)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)

    # Image captured by mobile camera
    detectedImage = models.ImageField(upload_to="detected_vehicle_pictures/", null=True, blank=True)

    detectedAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Detection of {self.complaint.plateNumber}"
    
class UnknownVehicle(models.Model):
    vehicleColor = models.CharField(max_length=50, null=True, blank=True)
    detectedAt = models.DateTimeField(auto_now_add=True)

    locationText = models.CharField(max_length=255, null=True, blank=True)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)

    image = models.ImageField(upload_to="unknown_vehicles/", null=True, blank=True)

    def __str__(self):
        return f"Unknown Vehicle - {self.detectedAt}"
=======

# Create your models here.
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
