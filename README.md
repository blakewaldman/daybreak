# Daybreak Setup

## NOTE: No longer active due to cancelling subscriptions to some API services.

## Prerequisites

1. Install [Node.js](https://nodejs.org/en/)
2. Install [Python](https://www.python.org/downloads/)
3. Download source code, extract it, you should see 2 folders. "smart-todo" is the frontend/website, "smartTodoBackend" is the backend/database.

## Frontend Web Application

### Frontend Instructions

To run the frontend host:

1. Open CMD/Terminal
2. Change directories in the CMD window to the "smart-todo" folder (CD command)\
   (Eg: "cd C:\Users\Lucas\Downloads\SmartToDo\smart-todo")
3. Run `rm -rf node_modules`
4. Run `npm install`
5. Run `npm audit fix --force` if you run into any vulnerabilities errors
6. Run `npm run dev` in CMD

The output will look something like this:
VITE v4.1.3 ready in 1927 ms

➜ Local: http://127.0.0.1:5173/
➜ Network: use --host to expose
➜ press h to show help

The "Local: __" is the link to open the frontend website in your web-browser.

It won't let you login or create an account until you also have the backend running! See steps below.

## Backend Database

### Backend Instructions

To run the backend database:

1. Open another CMD/Terminal window
2. Run `python -m pip install --upgrade pip` to upgrade pip if necessary
3. Run `pip install django`
4. Run `pip install django --upgrade` to update your Django version if necessary\
   The command may be `python -m pip install -U django`
5. Run `pip install django_rest_framework`
6. Run `pip install django_rest_framework --upgrade` to update your Django Rest version if necessary\
   The command may be `python -m pip install -U django_rest_framework`
7. Run `pip install django-cors-headers`
8. Run `pip install django-cors-headers --upgrade` to update your Django CORS version if necessary\
   The command may be `python -m pip install -U django-cors-headers`
9. Run `pip install requests`
10. Run `pip install requests` to update your requests version if necessary\
    The command may be `python -m pip install -U requests`
11. Run `pip install BeautifulSoup4`
12. Run `pip install BeautifulSoup4 --upgrade` to update your BeautifulSoup4 version if necessary\
    The command may be `python -m pip install -U BeautifulSoup4`
13. Change directories in the CMD window to the "smartTodoBackend" folder (CD command)
14. Run `python manage.py runserver`

If you see a message like "You have XX unapplied migrations..." then you must:

1. Press CTRL+C to stop the backend
2. Run `python manage.py migrate`
3. Run `python manage.py runserver` to start the backend again, and the message should go away.

With both the frontend and the backend running, the Local IP address shown on the frontend CMD window should take you to the website, where you can create an account, login, and start using the web-app.
