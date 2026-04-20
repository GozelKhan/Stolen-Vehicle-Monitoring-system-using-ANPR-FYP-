from django.db import models
<<<<<<< HEAD
from detection.models import Detection
class PredictionRoute(models.Model):
    detection = models.ForeignKey(Detection, on_delete=models.CASCADE, related_name="predictedRoutes")

    routeName = models.CharField(max_length=255)
    probability = models.FloatField(default=0.0)
    pathCoordinates = models.JSONField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Prediction for {self.detection.complaint.plateNumber}"
=======
<<<<<<< HEAD
from detection.models import Detection
class PredictionRoute(models.Model):
    detection = models.ForeignKey(Detection, on_delete=models.CASCADE, related_name="predictedRoutes")

    routeName = models.CharField(max_length=255)
    probability = models.FloatField(default=0.0)
    pathCoordinates = models.JSONField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Prediction for {self.detection.complaint.plateNumber}"
=======

# Create your models here.
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
