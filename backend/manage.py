#!/usr/bin/env python
"""Django command-line utility."""

import os
import sys

def main():
    # Set Django settings file
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

    try:
        # Import Django command executor
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        # Show error if Django is not installed
        raise ImportError("Couldn't import Django.") from exc

    # Execute command (runserver, migrate, etc.)
    execute_from_command_line(sys.argv)

# Run main function
if __name__ == '__main__':
    main()
