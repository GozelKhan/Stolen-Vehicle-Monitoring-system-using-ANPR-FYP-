from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate, get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
<<<<<<< HEAD
from .serializers import (
    RegisterSerializer,
    UserSerializer,
    ForgotPasswordSerializer,
    VerifyOTPSerializer,
    ResetPasswordSerializer,
    UpdateProfileSerializer
)
from django.core.mail import EmailMultiAlternatives
from django.utils import timezone
import random
from .models import PasswordResetOTP
from django.template.loader import render_to_string
import logging

logger = logging.getLogger(__name__)
User = get_user_model()

=======
from .serializers import RegisterSerializer, UserSerializer, ForgotPasswordSerializer, VerifyOTPSerializer, ResetPasswordSerializer
from django.core.mail import send_mail
from django.utils import timezone
import random
from .models import PasswordResetOTP

User = get_user_model()


>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
<<<<<<< HEAD

        # Send signup email
        try:
            html_content = render_to_string("email/user_signup.html", {
                "name": user.fullName,
                "login_url": "http://localhost:5173/login",
                "year": 2025
            })

            email = EmailMultiAlternatives(
                subject=f"{user.role} Account Created",
                body="",
                from_email="Trackvision240@gmail.com",
                to=[user.email],
            )
            email.attach_alternative(html_content, "text/html")
            email.send()

        except Exception as e:
            logger.error(f"Failed to send signup email: {e}")

=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
        return Response({
            "status": "success",
            "message": f"{user.role.capitalize()} registered successfully.",
            "user": {
                "id": user.id,
                "fullName": user.fullName,
                "email": user.email,
                "role": user.role,
            }
        }, status=status.HTTP_201_CREATED)

class LoginView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        user = authenticate(email=email, password=password)

        if user:
<<<<<<< HEAD
=======
            # Generate tokens
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)

            serializer = UserSerializer(user)
<<<<<<< HEAD
            user_data = serializer.data

            # Send Login Alert Email
            try:
                html_content = render_to_string("email/user_login_alert.html", {
                    "name": user_data["fullName"],
                    "time": timezone.now()
                })

                email = EmailMultiAlternatives(
                    subject="Login Alert",
                    body="",
                    from_email="Trackvision240@gmail.com",
                    to=[user_data["email"]],
                )
                email.attach_alternative(html_content, "text/html")
                email.send()

            except Exception as e:
                logger.error(f"Failed to send login alert email: {e}")
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5

            return Response({
                "status": "success",
                "message": "Login successful",
<<<<<<< HEAD
                "user": user_data,
                "access": access_token,
                "refresh": str(refresh),
            })
=======
                "user": serializer.data,
                "access": access_token,
                "refresh": str(refresh),
            }, status=status.HTTP_200_OK)
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5

        return Response(
            {"status": "error", "message": "Invalid email or password"},
            status=status.HTTP_401_UNAUTHORIZED
        )
<<<<<<< HEAD
=======

>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
class ForgotPasswordView(APIView):
    def post(self, request):
        serializer = ForgotPasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data['email']

        user = User.objects.get(email=email)
        otp = str(random.randint(100000, 999999))

        PasswordResetOTP.objects.create(user=user, otp=otp)
<<<<<<< HEAD

        try:
            html_content = render_to_string("email/forgot_password_otp.html", {
                "name": user.fullName,
                "otp": otp,
                "year": 2025
            })

            email = EmailMultiAlternatives(
                subject="Password Reset OTP",
                body="",
                from_email="Trackvision240@gmail.com",
                to=[user.email],
            )
            email.attach_alternative(html_content, "text/html")
            email.send()

        except Exception as e:
            logger.error(f"Failed to send OTP email: {e}")

        return Response({"message": "OTP sent to your email.", "otp": otp})
=======
        print(otp)
        
        send_mail(
            subject="Password Reset OTP",
            message=f"Your OTP for password reset is: {otp}",
            from_email="Trackvision240@gmail.com",
            recipient_list=[email],
        )
        print("Email send to user", [email])
        return Response({"message": "OTP sent to your email.", "otp": otp}, status=status.HTTP_200_OK)


>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
class VerifyOTPView(APIView):
    def post(self, request):
        serializer = VerifyOTPSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data['email']
        otp = serializer.validated_data['otp']

        try:
            user = User.objects.get(email=email)
<<<<<<< HEAD
            otp_record = PasswordResetOTP.objects.filter(
                user=user, otp=otp
            ).latest('created_at')

        except (User.DoesNotExist, PasswordResetOTP.DoesNotExist):
            return Response({"error": "Invalid OTP or email"}, status=400)
=======
            otp_record = PasswordResetOTP.objects.filter(user=user, otp=otp).latest('created_at')
        except (User.DoesNotExist, PasswordResetOTP.DoesNotExist):
            return Response({"error": "Invalid OTP or email"}, status=status.HTTP_400_BAD_REQUEST)
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5

        otp_record.is_verified = True
        otp_record.save()

<<<<<<< HEAD
        return Response({"message": "OTP verified successfully."})
=======
        return Response({"message": "OTP verified successfully."}, status=status.HTTP_200_OK)


>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
class ResetPasswordView(APIView):
    def post(self, request):
        serializer = ResetPasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data['email']
        new_password = serializer.validated_data['new_password']

        try:
            user = User.objects.get(email=email)
<<<<<<< HEAD
            otp_record = PasswordResetOTP.objects.filter(
                user=user, is_verified=True
            ).latest('created_at')

        except (User.DoesNotExist, PasswordResetOTP.DoesNotExist):
            return Response({"error": "OTP not verified or invalid."}, status=400)
=======
            otp_record = PasswordResetOTP.objects.filter(user=user, is_verified=True).latest('created_at')
        except (User.DoesNotExist, PasswordResetOTP.DoesNotExist):
            return Response({"error": "OTP not verified or invalid."}, status=status.HTTP_400_BAD_REQUEST)
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5

        user.set_password(new_password)
        user.save()

<<<<<<< HEAD
        otp_record.delete()

        return Response({"message": "Password reset successful."})

from rest_framework.decorators import api_view

@api_view(["GET"])
def get_profile(request):
    email = request.GET.get("email")

    if not email:
        return Response({"error": "Email is required"}, status=400)

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({"error": "User not found"}, status=404)

    data = {
        "fullName": user.fullName,
        "email": user.email,
        "phoneNumber": user.phoneNumber,
    }
    return Response(data)

@api_view(["PUT"])
def update_profile(request):
    email = request.data.get("email")

    if not email:
        return Response({"error": "Email is required"}, status=400)

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({"error": "User not found"}, status=404)

    serializer = UpdateProfileSerializer(user, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Profile updated", "data": serializer.data})

    return Response(serializer.errors, status=400)
=======
        otp_record.delete()  # cleanup used OTP

        return Response({"message": "Password reset successful."}, status=status.HTTP_200_OK)
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
