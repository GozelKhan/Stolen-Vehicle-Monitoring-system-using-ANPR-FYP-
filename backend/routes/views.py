<<<<<<< HEAD
from rest_framework.views import APIView
from rest_framework.response import Response
from .route_prediction import predict_routes

class RoutePredictionAPIView(APIView):
    def post(self, request):
        plate = request.data.get("plateNumber")
        location = request.data.get("current_location")

        if not plate or not location:
            return Response({"error": "plateNumber & current_location required"}, status=400)

        predictions = predict_routes(plate, location)
        return Response({"predictions": predictions})
=======
<<<<<<< HEAD
from rest_framework.views import APIView
from rest_framework.response import Response
from .route_prediction import predict_routes

class RoutePredictionAPIView(APIView):
    def post(self, request):
        plate = request.data.get("plateNumber")
        location = request.data.get("current_location")

        if not plate or not location:
            return Response({"error": "plateNumber & current_location required"}, status=400)

        predictions = predict_routes(plate, location)
        return Response({"predictions": predictions})
=======
from django.shortcuts import render

# Create your views here.
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
