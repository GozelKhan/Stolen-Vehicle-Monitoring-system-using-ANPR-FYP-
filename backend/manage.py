#!/usr/bin/env python
"""Django command-line utility."""

import os
import sys

def main():
    # Configure Django settings
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

    try:
        # Import Django command handler
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        # Error if Django is not installed
        raise ImportError("Couldn't import Django.") from exc

    # Run Django commands (runserver, migrate, etc.)
    execute_from_command_line(sys.argv)

# Start program
if __name__ == '__main__':
    main()
