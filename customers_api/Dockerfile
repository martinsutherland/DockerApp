# Use an official Python runtime as a parent image
FROM python:3

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Install the Flask-MySQLdb package
RUN pip install flask-mysql

RUN pip install mysql-connector-python

RUN pip install flask-mysqldb

# Expose port 5000 for the Flask app
EXPOSE 5000

# Set the environment variable for the Flask app
ENV FLASK_APP app.py

# Set the default command to run when the container starts
CMD ["flask", "run", "--host=0.0.0.0"]
