from django.db import models

# Create your models here.

class User(models.Model):
    User_Id = models.AutoField(primary_key=True)
    Firstname = models.CharField(max_length=50)
    Lastname = models.CharField(max_length=50)
    International_Code = models.CharField(max_length=10)
    Phone = models.CharField(max_length=11)
    Username = models.CharField(max_length=50)
    Password = models.CharField(max_length=50)


class Teacher(models.Model):
    CHOICES = [
        ('True', 'بله'),
        ('False', 'خیر'),
    ]
    Teacher_Id = models.AutoField(primary_key=True)
    Code_vezarat_olom = models.CharField(max_length=20)
    Work_experience = models.BooleanField(default=False, choices=CHOICES)
    Education = models.CharField(max_length=50)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name='Teacher', default='')


class Student(models.Model):
    DEBT_STATUS_CHOICES = [
        ('SUSPENDED', 'معلق شده'),
        ('PAID', 'پرداخت شده'),
        ('UNPAID', 'پرداخت نشده'),
    ]
    Student_Id = models.AutoField(primary_key=True)
    Education_level = models.CharField(max_length=50)
    Debt_status = models.CharField(max_length=50, choices=DEBT_STATUS_CHOICES)
    user = models.ForeignKey(User, models.DO_NOTHING, related_name='Student', default='')


class Parent(models.Model):
    Parent_Id = models.AutoField(primary_key=True)
    Number_of_children = models.IntegerField()
    user = models.ForeignKey(User, models.DO_NOTHING, related_name='Parent', default='')


class Manager(models.Model):
    Manager_Id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, models.DO_NOTHING, related_name='Manager', default='')
