"""
URL configuration for backend project.
This file maps URL routes to their corresponding views.
"""

from django.contrib import admin
from django.urls import path
from users.views import (
    RegisterView,
    LoginView,
    ForgotPasswordView,
    VerifyOTPView,
    ResetPasswordView
)

# List of URL routes for the project
urlpatterns = [
    
    # Django admin panel
    path('admin/', admin.site.urls),

    # User registration
    path('signup/', RegisterView.as_view(), name='signup'),

    # User login
    path('login/', LoginView.as_view(), name='login'),

    # Forgot password request
    path('forgot-password/', ForgotPasswordView.as_view(), name='forgot-password'),

    # OTP verification for password reset
    path('verify-otp/', VerifyOTPView.as_view(), name='verify-otp'),

    # Reset password after OTP verification
    path('reset-password/', ResetPasswordView.as_view(), name='reset-password'),

    # Future routes (currently disabled)
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('me/', UserProfileView.as_view(), name='user-profile'),
]
