# Generated by Django 5.0.6 on 2024-09-20 05:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('User', '0002_teacher_user_ptr_alter_teacher_work_experience'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='teacher',
            name='user_ptr',
        ),
    ]