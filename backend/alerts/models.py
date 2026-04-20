from django.db import models
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
from detection.models import Detection
class Alert(models.Model):
    ALERT_TYPE = (
        ("vehicle_detected", "Vehicle Detected"),
    )
<<<<<<< HEAD

    detection = models.ForeignKey(Detection, on_delete=models.CASCADE, related_name="alerts")

    alertType = models.CharField(max_length=50, choices=ALERT_TYPE, default="vehicle_detected")
    alertMessage = models.TextField()

    # Store snapshot sent to owner (can reuse detection image or generate resized version)
    alertImage = models.ImageField(upload_to="alerts/", null=True, blank=True)

    sentAt = models.DateTimeField(auto_now_add=True)

    isRead = models.BooleanField(default=False)  # For showing in user app

    def __str__(self):
        return f"Alert for {self.detection.complaint.plateNumber}"
=======

    detection = models.ForeignKey(Detection, on_delete=models.CASCADE, related_name="alerts")

    alertType = models.CharField(max_length=50, choices=ALERT_TYPE, default="vehicle_detected")
    alertMessage = models.TextField()

    # Store snapshot sent to owner (can reuse detection image or generate resized version)
    alertImage = models.ImageField(upload_to="alerts/", null=True, blank=True)

    sentAt = models.DateTimeField(auto_now_add=True)

    isRead = models.BooleanField(default=False)  # For showing in user app

    def __str__(self):
        return f"Alert for {self.detection.complaint.plateNumber}"
=======

# Create your models here.
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
