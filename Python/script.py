import os
import subprocess
import random
from datetime import datetime, timedelta

# ======================
# CONFIG
# ======================
REPO_PATH = r"C:\Users\Gozel Ali Khan\OneDrive\Desktop\FYP"
FILE_NAME = "dummy.txt"

start_date = datetime(2026, 1, 2)
num_days = 10

# Professional commit messages
messages = [
    "Initial project setup",
    "Added core project structure",
    "Implemented base functionality",
    "Updated application logic",
    "Fixed minor issues",
    "Improved performance",
    "Refactored code structure",
    "Updated UI components",
    "Optimized codebase",
    "Finalized changes"
]

os.chdir(REPO_PATH)

# ======================
# GENERATE COMMITS
# ======================
for i in range(num_days):
    commit_date = start_date + timedelta(days=i)

    # random time (more realistic)
    random_hour = random.randint(9, 18)
    random_min = random.randint(0, 59)
    random_sec = random.randint(0, 59)

    formatted_date = f"{commit_date.strftime('%Y-%m-%d')} {random_hour:02d}:{random_min:02d}:{random_sec:02d} +0500"

    # update file
    with open(FILE_NAME, "a", encoding="utf-8") as f:
        f.write(f"{messages[i]}\n")

    subprocess.run(["git", "add", FILE_NAME])

    env = os.environ.copy()
    env["GIT_AUTHOR_DATE"] = formatted_date
    env["GIT_COMMITTER_DATE"] = formatted_date

    commit_msg = messages[i]

    subprocess.run(
        ["git", "commit", "-m", commit_msg],
        env=env
    )

print("✅ Professional commits created successfully!")