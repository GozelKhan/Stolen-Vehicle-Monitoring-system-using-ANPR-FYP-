from rest_framework import serializers
from django.conf import settings
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
from django.contrib.auth import authenticate
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
from django.contrib.auth import get_user_model

User = get_user_model()


<<<<<<< HEAD
# -------------------- REGISTER SERIALIZER --------------------
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    organizationName = serializers.CharField(write_only=True, required=False, allow_blank=True, allow_null=True)
    organizationCode = serializers.CharField(write_only=True, required=False, allow_blank=True, allow_null=True)
=======
<<<<<<< HEAD
# -------------------- REGISTER SERIALIZER --------------------
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    organizationName = serializers.CharField(write_only=True, required=False, allow_blank=True, allow_null=True)
    organizationCode = serializers.CharField(write_only=True, required=False, allow_blank=True, allow_null=True)
=======
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    organization_name = serializers.CharField(write_only=True, required=False)
    organization_code = serializers.CharField(write_only=True, required=False)
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8

    class Meta:
        model = User
        fields = [
            'id', 'fullName', 'email', 'password',
            'cnic', 'phoneNumber', 'role',
<<<<<<< HEAD
            'organizationName', 'organizationCode'
=======
<<<<<<< HEAD
            'organizationName', 'organizationCode'
=======
            'organization_name', 'organization_code'
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
        ]

    def validate(self, attrs):
        role = attrs.get('role', 'user')

<<<<<<< HEAD
        # When admin, verify org name + code
        if role == 'admin':
            org_name = attrs.get('organizationName')
            org_code = attrs.get('organizationCode')
=======
<<<<<<< HEAD
        # When admin, verify org name + code
        if role == 'admin':
            org_name = attrs.get('organizationName')
            org_code = attrs.get('organizationCode')
=======
        # If registering as admin, verify organization name and code
        if role == 'admin':
            org_name = attrs.get('organization_name')
            org_code = attrs.get('organization_code')
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8

            allowed_orgs = getattr(settings, "ALLOWED_ORGANIZATIONS", {})

            if org_name not in allowed_orgs or allowed_orgs[org_name] != org_code:
                raise serializers.ValidationError("Invalid organization name or code for admin registration.")

        return attrs

    def create(self, validated_data):
<<<<<<< HEAD
        validated_data.pop("organizationName", None)
        validated_data.pop("organizationCode", None)

=======
<<<<<<< HEAD
        validated_data.pop("organizationName", None)
        validated_data.pop("organizationCode", None)

=======
        validated_data.pop("organization_name", None)
        validated_data.pop("organization_code", None)
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
        user = User.objects.create_user(
            fullName=validated_data.get('fullName', ''),
            email=validated_data.get('email', ''),
            password=validated_data.get('password', ''),
            cnic=validated_data.get('cnic', ''),
            phoneNumber=validated_data.get('phoneNumber', ''),
            role=validated_data.get('role', 'user')
        )
        return user


<<<<<<< HEAD
# -------------------- USER SERIALIZER --------------------
=======
<<<<<<< HEAD
# -------------------- USER SERIALIZER --------------------
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'fullName', 'cnic', 'phoneNumber', 'role']


<<<<<<< HEAD
# -------------------- CUSTOM JWT SERIALIZER --------------------
=======
<<<<<<< HEAD
# -------------------- CUSTOM JWT SERIALIZER --------------------
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
=======
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
<<<<<<< HEAD
=======
        # Add custom claims
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
        token['email'] = user.email
        token['fullName'] = user.fullName
        token['role'] = user.role
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        # Add user info to response
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
        data['user'] = {
            'id': self.user.id,
            'email': self.user.email,
            'fullName': self.user.fullName,
            'role': self.user.role,
        }
        return data

<<<<<<< HEAD

# -------------------- FORGOT / RESET PASSWORD SERIALIZERS --------------------
=======
<<<<<<< HEAD

# -------------------- FORGOT / RESET PASSWORD SERIALIZERS --------------------
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
class ForgotPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        if not User.objects.filter(email=value).exists():
            raise serializers.ValidationError("No user found with this email.")
        return value


class VerifyOTPSerializer(serializers.Serializer):
    email = serializers.EmailField()
    otp = serializers.CharField(max_length=6)


class ResetPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
    new_password = serializers.CharField(write_only=True, min_length=6)


# -------------------- UPDATE PROFILE SERIALIZER --------------------
class UpdateProfileSerializer(serializers.ModelSerializer):
    fullName = serializers.CharField(required=False)
    phoneNumber = serializers.CharField(required=False)

    class Meta:
        model = User
        fields = ["fullName", "phoneNumber"]

    def validate_phoneNumber(self, value):
        if value and not value.isdigit():
            raise serializers.ValidationError("Phone number must contain digits only.")
        return value

    def update(self, instance, validated_data):
        instance.fullName = validated_data.get("fullName", instance.fullName)
        instance.phoneNumber = validated_data.get("phoneNumber", instance.phoneNumber)
        instance.save()
        return instance
<<<<<<< HEAD
=======
=======
    new_password = serializers.CharField(write_only=True, min_length=6)
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
