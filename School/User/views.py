from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import Teacher, Student, Parent, Manager, User
from .forms import TeacherModel, StudentModel, ParentModel, ManagerModel

# Create your views here.

### start functions for teacher
def teachers(request):
    teachers = Teacher.objects.all()
    return render(request, 'User/Teacher/teacher.html', context={'teachers': teachers})


def add_teacher(request):
    teacher = TeacherModel()
    return render(request, 'User/Teacher/add_teacher.html', context={'teacher': teacher})


def save_teacher(request):
    if request.method == 'POST':
        teacher = TeacherModel(request.POST)
        if teacher.is_valid():
            new_user = User.objects.create(
                Firstname = teacher.data['Firstname'],
                Lastname = teacher.data['Lastname'],
                International_Code = teacher.data['International_Code'],
                Phone = teacher.data['Phone'],
                Username = teacher.data['Username'],
                Password = teacher.data['Password'],
            )
            Teacher.objects.create(
                Code_vezarat_olom = teacher.data['Code_vezarat_olom'],
                Work_experience = teacher.data['Work_experience'],
                Education = teacher.data['Education'],
                user = new_user
            )
            return HttpResponseRedirect('/teachers')
        else:
            return 'Invalid data'
    else:
        teacher = TeacherModel()


def search_teacher(request, id):
    result = Teacher.objects.filter(Teacher_Id=id).first()

    teacher = TeacherModel(initial={'Teacher_Id': id, 'Firstname': result.user.Firstname, 'Lastname': result.user.Lastname,
                                    'Phone': result.user.Phone, 'International_Code': result.user.International_Code,
                                    'Username': result.user.Username, 'Password': result.user.Password,
                                    'Code_vezarat_olom': result.Code_vezarat_olom,'Work_experience': result.Work_experience,
                                    'Education': result.Education})

    return render(request, 'User/Teacher/edit_teacher.html', context={'teacher': teacher})


def update_teacher(request):
    if request.method == 'POST':
        teacher = TeacherModel(request.POST)

        id = teacher.data['Teacher_Id']
        result = Teacher.objects.filter(Teacher_Id=id).first()

        result.user.Firstname = teacher.data['Firstname']
        result.user.Lastname = teacher.data['Lastname']
        result.user.Phone = teacher.data['Phone']
        result.user.International_Code = teacher.data['International_Code']
        result.user.Username = teacher.data['Username']
        result.user.Password = teacher.data['Password']
        result.Code_vezarat_olom = teacher.data['Code_vezarat_olom']
        result.Work_experience = teacher.data['Work_experience']
        result.Education = teacher.data['Education']

        result.save()

    return HttpResponseRedirect('/teachers')


def delete_teacher(request, id):
    Teacher.objects.filter(Teacher_Id=id).first().delete()
    return HttpResponseRedirect('/teachers')
### end functions for teacher


### start functions for student
def students(request):
    students = Student.objects.all()
    return render(request, 'User/Student/student.html', context={'students': students})


def add_student(request):
    student = StudentModel()
    return render(request, 'User/Student/add_student.html', context={'student': student})


def save_student(request):
    if request.method == 'POST':
        student = StudentModel(request.POST)
        if student.is_valid():
            new_user = User.objects.create(
                Firstname = student.data['Firstname'],
                Lastname = student.data['Lastname'],
                International_Code = student.data['International_Code'],
                Phone = student.data['Phone'],
                Username = student.data['Username'],
                Password = student.data['Password'],
            )
            Student.objects.create(
                Education_level = student.data['Education_level'],
                Debt_status = student.data['Debt_status'],
                user = new_user
            )
            return HttpResponseRedirect('/students')
        else:
            return 'Invalid data'
    else:
        student = StudentModel()


def search_student(request, id):
    result = Student.objects.filter(Student_Id=id).first()

    student = StudentModel(initial={'Student_Id': id, 'Firstname': result.user.Firstname, 'Lastname': result.user.Lastname,
                                    'Phone': result.user.Phone, 'International_Code': result.user.International_Code,
                                    'Username': result.user.Username, 'Password': result.user.Password,
                                    'Education_level': result.Education_level, 'Debt_status': result.Debt_status})

    return render(request, 'User/Student/edit_student.html', context={'student': student})


def update_student(request):
    if request.method == 'POST':
        student = StudentModel(request.POST)

        id = student.data['Student_Id']
        result = Student.objects.filter(Student_Id=id).first()

        result.Firstname = student.data['Firstname']
        result.Lastname = student.data['Lastname']
        result.Phone = student.data['Phone']
        result.International_Code = student.data['International_Code']
        result.Username = student.data['Username']
        result.Password = student.data['Password']
        result.Education_level = student.data['Education_level']
        result.Debt_status = student.data['Debt_status']

        result.save()

    return HttpResponseRedirect('/students')


def delete_student(request, id):
    Student.objects.filter(Student_Id=id).first().delete()
    return HttpResponseRedirect('/students')
### end functions for student


### start functions for parent
def parents(request):
    parents = Parent.objects.all()
    return render(request, 'User/Parent/parent.html', context={'parents': parents, 'users': users})


def add_parent(request):
    parent = ParentModel()
    return render(request, 'User/Parent/add_parent.html', context={'parent': parent})


def save_parent(request):
    if request.method == 'POST':
        parent = ParentModel(request.POST)
        if parent.is_valid():
            new_user = User.objects.create(
                Firstname = parent.data['Firstname'],
                Lastname = parent.data['Lastname'],
                International_Code = parent.data['International_Code'],
                Phone = parent.data['Phone'],
                Username = parent.data['Username'],
                Password = parent.data['Password'],
            )
            Parent.objects.create(
                Number_of_children = parent.data['Number_of_children'],
                user = new_user

            )
            return HttpResponseRedirect('/parents')
        else:
            return 'Invalid data'
    else:
        parent = ParentModel()


def search_parent(request, id):
    result = Parent.objects.filter(Parent_Id=id).first()

    parent = ParentModel(initial={'Parent_Id': id, 'Firstname': result.user.Firstname, 'Lastname': result.user.Lastname,
                                  'Phone': result.user.Phone, 'International_Code': result.user.International_Code,
                                  'Username': result.user.Username, 'Password': result.user.Password,
                                  'Number_of_children': result.Number_of_children})

    return render(request, 'User/Parent/edit_parent.html', context={'parent': parent})


def update_parent(request):
    if request.method == 'POST':
        parent = ParentModel(request.POST)

        id = parent.data['Parent_Id']
        result = Parent.objects.filter(Parent_Id=id).first()

        result.Firstname = parent.data['Firstname']
        result.Lastname = parent.data['Lastname']
        result.Phone = parent.data['Phone']
        result.International_Code = parent.data['International_Code']
        result.Username = parent.data['Username']
        result.Password = parent.data['Password']
        result.Number_of_children = parent.data['Number_of_children']

        result.save()

    return HttpResponseRedirect('/parents')


def delete_parents(request, id):
    Parent.objects.filter(Parent_Id=id).first().delete()
    return HttpResponseRedirect('/parents')
### end functions for parent


### start functions for manager
def managers(request):
    managers = Manager.objects.all()
    return render(request, 'User/Manager/manager.html', context={'managers': managers})


def add_manager(request):
    manager = ManagerModel()
    return render(request, 'User/Manager/add_manager.html', context={'manager': manager})


def save_manager(request):
    if request.method == 'POST':
        manager = ManagerModel(request.POST)
        if manager.is_valid():
            new_user = User.objects.create(
                Firstname = manager.data['Firstname'],
                Lastname = manager.data['Lastname'],
                International_Code = manager.data['International_Code'],
                Phone = manager.data['Phone'],
                Username = manager.data['Username'],
                Password = manager.data['Password'],
            )
            Manager(
                user = new_user
            ).save()
            return HttpResponseRedirect('/managers')
        else:
            return 'Invalid data'
    else:
        manager = ManagerModel()


def search_manager(request, id):
    result = Manager.objects.filter(Manager_Id=id).first()

    manager = ManagerModel(initial={'Manager_Id': id, 'Firstname': result.user.Firstname, 'Lastname': result.user.Lastname,
                                    'Phone': result.user.Phone, 'International_Code': result.user.International_Code,
                                    'Username': result.user.Username, 'Password': result.user.Password})

    return render(request, 'User/Manager/edit_manager.html', context={'manager': manager})


def update_manager(request):
    if request.method == 'POST':
        manager = ManagerModel(request.POST)

        id = manager.data['Manager_Id']
        result = Manager.objects.filter(Manager_Id=id).first()

        result.Firstname = manager.data['Firstname']
        result.Lastname = manager.data['Lastname']
        result.Phone = manager.data['Phone']
        result.International_Code = manager.data['International_Code']
        result.Username = manager.data['Username']
        result.Password = manager.data['Password']

        result.save()

    return HttpResponseRedirect('/managers')


def delete_manager(request, id):
    Manager.objects.filter(Manager_Id=id).first().delete()
    return HttpResponseRedirect('/managers')
### end functions for manager
