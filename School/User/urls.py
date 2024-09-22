from django.urls import path
from . import views

urlpatterns = [
    # Teacher
    path('teachers', views.teachers, name='Teachers'),
    path('add_teacher', views.add_teacher, name='Add Teacher'),
    path('save_teacher', views.save_teacher, name='Save Teacher'),
    path('search_teacher/<int:id>', views.search_teacher, name='Search Teacher'),
    path('update_teacher', views.update_teacher, name='Update Teacher'),
    path('delete_teacher/<int:id>', views.delete_teacher, name='Delete Teacher'),

    # Student
    path('students', views.students, name='Students'),
    path('add_student', views.add_student, name='Add Student'),
    path('search_student/<int:id>', views.search_student, name='Search Student'),
    path('save_student', views.save_student, name='Save Student'),
    path('update_student', views.update_student, name='Update Student'),
    path('delete_student/<int:id>', views.delete_student, name='Delete Student'),

    # Parent
    path('parents', views.parents, name='Parents'),
    path('add_parent', views.add_parent, name='Add Parent'),
    path('save_parent', views.save_parent, name='Save Parent'),
    path('search_parent/<int:id>', views.search_parent, name='Search Parent'),
    path('update_parent', views.update_parent, name='Update Parent'),
    path('delete_parent/<int:id>', views.delete_parents, name='Delete Parent'),

    # Manager
    path('managers', views.managers, name='Managers'),
    path('add_manager', views.add_manager, name='Add Manager'),
    path('search_manager/<int:id>', views.search_manager, name='Search Manager'),
    path('save_manager', views.save_manager, name='Save Manager'),
    path('update_manager', views.update_manager, name='Update Manager'),
    path('delete_manager/<int:id>', views.delete_manager, name='Delete Manager'),
]
